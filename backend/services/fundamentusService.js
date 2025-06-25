const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

/**
 * Extrai dados do HTML do Fundamentus
 * @param {string} html
 * @returns {{dy: string, pvp: string, nome: string, cotacao: string}}
 */
function parseFundamentusHtml(html) {
  const $ = cheerio.load(html);
  let dy = null, pvp = null, nome = null, cotacao = null;

  // Procura por todas as linhas da tabela
  $('tr').each((i, el) => {
    // Dividend Yield
    const labelDY = $(el).find('td .txt').filter((i, span) => $(span).text().trim() === 'Div. Yield');
    if (labelDY.length > 0) {
      dy = $(el).find('td.data .txt').first().text().trim();
    }
    // P/VP
    const labelPVP = $(el).find('td .txt').filter((i, span) => $(span).text().trim() === 'P/VP');
    if (labelPVP.length > 0) {
      pvp = $(el).find('td.data .txt').first().text().trim();
    }
    // Cotação
    const tds = $(el).find('td');
    tds.each((j, td) => {
      const txt = $(td).find('.txt').first().text().trim();
      if (txt === 'Cotação') {
        // Pega o próximo td irmão
        const cotacaoTd = tds.eq(j + 1);
        cotacao = cotacaoTd.find('.txt').first().text().trim();
      }
    });
  });

  // Nome (primeira tabela)
  const primeiraTabela = $('table.w728').first();
  primeiraTabela.find('tr').each((i, el) => {
    const label = $(el).find('td.label .txt').first().text().trim();
    if (label === 'Nome' || label === 'Empresa' || label === 'FII') {
      nome = $(el).find('td.data .txt').first().text().trim();
    }
  });

  return { dy, pvp, nome, cotacao };
}

/**
 * Busca dados do Fundamentus para um ticker (ação ou FII)
 * @param {string} ticker - Ex: 'MXRF11', 'BBAS3'
 * @returns {Promise<{dy: string, pvp: string, nome: string, cotacao: string}>}
 */
async function getFundamentusData(ticker) {
  const url = `https://www.fundamentus.com.br/detalhes.php?papel=${ticker.toUpperCase()}`;
  // Faz o request como buffer para tratar encoding
  const response = await axios.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    responseType: 'arraybuffer',
  });
  // Decodifica o buffer para ISO-8859-1
  const html = iconv.decode(response.data, 'ISO-8859-1');
  return { ticker, ...parseFundamentusHtml(html) };
}

module.exports = { getFundamentusData, parseFundamentusHtml }; 