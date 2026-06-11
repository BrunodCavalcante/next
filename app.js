
const state = {
  page: 'dashboard',
  selectedProduct: null,
  selectedClient: null,
  selectedOrder: null,
  dashboardMonths: ['Jun','Jul','Ago','Set','Out','Nov','Dez','Jan','Fev','Mar','Abr','Mai'],
  dashboardSales: [27680,30000,26680,19680,7680,14680,17680,19680,37680,42680,35680,40680],
  clientes: [
    {id:1, nome:'DORNELLES REOLON', telefone:'67 99853-1578', documento:'39.597.359/0002-76', cidade:'Douradina', uf:'MS', area:'780 ha', fazenda:'Água Fria', culturas:'Soja / Milho', potencial:'Alto', status:'Ativo'},
    {id:2, nome:'DOUGLAS DE CARVALHO', telefone:'67 99785-1945', documento:'12.456.789/0001-55', cidade:'Rio Brilhante', uf:'MS', area:'1200 ha', fazenda:'Santa Luzia', culturas:'Soja', potencial:'Estratégico', status:'Ativo'},
    {id:3, nome:'DUQUE BASSO', telefone:'67 99492-3451', documento:'48.229.100/0001-18', cidade:'Sidrolândia', uf:'MS', area:'2500 ha', fazenda:'Boa Vista', culturas:'Soja / Milho / Trigo', potencial:'Estratégico', status:'Ativo'},
    {id:4, nome:'EBILTON DONATTO DOS SANTOS', telefone:'67 99853-5592', documento:'28.331.891/0001-20', cidade:'Ponta Porã', uf:'MS', area:'1650 ha', fazenda:'Sol Nascente', culturas:'Milho', potencial:'Alto', status:'Ativo'},
    {id:5, nome:'EDEMAR COSTA CONTAR', telefone:'67 99332-6716', documento:'22.671.998/0001-03', cidade:'Sidrolândia', uf:'MS', area:'380 ha', fazenda:'São Bento', culturas:'Pecuária', potencial:'Médio', status:'Ativo'},
    {id:6, nome:'EDEMILSON LUIZ VIEIRA', telefone:'67 99598-1578', documento:'91.119.780/0001-88', cidade:'Laguna Carapã', uf:'MS', area:'600 ha', fazenda:'Santa Maria', culturas:'Soja', potencial:'Alto', status:'Ativo'}
  ],
  produtos: [
    {id:1, nome:'Powerful - Macrofitotônico', sku:'POWER-MACRO', embalagem:'Saco 25kg', unidade:'Kg', natureza:'Farelado', categoria:'Fertilizante', estoque:1480, reservado:260, lote:'PF-2601', validade:'30/11/2026', status:'Liberado', preco:3800, comissao:7.55},
    {id:2, nome:'Patriot - Complexo Nutricional Sistêmico', sku:'PATRIOT-NUTRI', embalagem:'Saco 25kg', unidade:'Kg', natureza:'Farelado', categoria:'Fertilizante', estoque:820, reservado:170, lote:'PT-2602', validade:'15/12/2026', status:'Liberado', preco:3950, comissao:7.55},
    {id:3, nome:'Marvin Complexo - Ativador', sku:'MARVIN-ATIV', embalagem:'Saco 25kg', unidade:'Kg', natureza:'Farelado', categoria:'Bioinsumo', estoque:560, reservado:80, lote:'MC-2601', validade:'22/10/2026', status:'Liberado', preco:3600, comissao:6.8},
    {id:4, nome:'Magnetto - Complexo Nitropotássico', sku:'MAG-NITRO', embalagem:'Saco 25kg', unidade:'Kg', natureza:'Farelado', categoria:'Fertilizante', estoque:1200, reservado:340, lote:'MG-2604', validade:'01/02/2027', status:'Liberado', preco:4100, comissao:8.0},
    {id:5, nome:'Shellt MV - Adjuvante Completo', sku:'SHELLT-MV', embalagem:'Saco 25kg', unidade:'Kg', natureza:'Farelado', categoria:'Adjuvante', estoque:290, reservado:90, lote:'SH-2603', validade:'09/09/2026', status:'Atenção', preco:2200, comissao:5.5},
    {id:6, nome:'Haxor Orange - Óleo de Laranja', sku:'HAXOR-ORANGE', embalagem:'Saco 25kg', unidade:'Kg', natureza:'Farelado', categoria:'Adjuvante', estoque:410, reservado:60, lote:'HO-2601', validade:'18/01/2027', status:'Liberado', preco:2500, comissao:5.8}
  ],
  pedidos: [
    {id:'000126', data:'12/06/2025', cliente:'DORNELLES REOLON', representante:'Bruno Cavalcante', cidade:'Douradina/MS', valor:36475.84, status:'Em análise', vencimento:'30/03/2027', pago:0},
    {id:'000178', data:'03/07/2025', cliente:'DOUGLAS DE CARVALHO', representante:'Ana Pereira', cidade:'Rio Brilhante/MS', valor:68768.65, status:'Faturado', vencimento:'30/03/2027', pago:0},
    {id:'000251', data:'26/08/2025', cliente:'DUQUE BASSO', representante:'Carlos Lima', cidade:'Sidrolândia/MS', valor:121769.18, status:'Autorizado', vencimento:'30/03/2027', pago:0},
    {id:'000363', data:'12/06/2025', cliente:'EBILTON DONATTO DOS SANTOS', representante:'Bruno Cavalcante', cidade:'Ponta Porã/MS', valor:47352.97, status:'Entregue', vencimento:'30/03/2027', pago:47352.97},
    {id:'000149', data:'04/05/2026', cliente:'DORNELLES REOLON', representante:'Bruno Cavalcante', cidade:'Rio Verde/GO', valor:18886.25, status:'Entregue', vencimento:'30/03/2027', pago:18886.25}
  ],
  representantes: [
    {id:1, nome:'Bruno Cavalcante', regiao:'MS Sul', meta:250000, vendido:210000, carteira:58, comissao:15855, status:'Ativo'},
    {id:2, nome:'Ana Pereira', regiao:'GO', meta:200000, vendido:172000, carteira:42, comissao:12986, status:'Ativo'},
    {id:3, nome:'Carlos Lima', regiao:'MT', meta:180000, vendido:145000, carteira:37, comissao:10947, status:'Meta parcial'}
  ]
};

const content = document.getElementById('content');
const breadcrumb = document.getElementById('breadcrumb');

const BRL = v => Number(v || 0).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
const cls = status => {
  const s = String(status || '').toLowerCase();
  if(s.includes('ativo') || s.includes('liberado') || s.includes('entregue') || s.includes('aprov') || s.includes('receb') || s.includes('pago')) return 'ok';
  if(s.includes('faturado') || s.includes('autorizado') || s.includes('em transporte')) return 'info';
  if(s.includes('cancel') || s.includes('venc') || s.includes('bloque') || s.includes('reprov')) return 'danger';
  return 'pending';
};
const badge = s => `<span class="badge ${cls(s)}">${s}</span>`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function setPage(page){
  state.page = page;
  document.querySelectorAll('[data-page]').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  render();
}

function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}

function modal(title, body, onConfirm, confirmText='Confirmar'){
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('modalConfirm').textContent = confirmText;
  const m = document.getElementById('modal');
  m.classList.add('open');
  const confirm = document.getElementById('modalConfirm');
  confirm.onclick = () => {
    if(onConfirm) onConfirm();
    m.classList.remove('open');
  };
}
function closeModal(){ document.getElementById('modal').classList.remove('open'); }

function pageHead(title, subtitle, actions=''){
  return `<div class="page-head"><div><h1>${title}</h1><p class="subtitle">${subtitle}</p></div><div class="actions">${actions}</div></div>`;
}
function filters(fields){
  return `<div class="card filters"><div class="form-grid">${
    fields.map(f => `<div class="field"><label>${f.label}</label>${f.type==='select'
      ? `<select id="${f.id||''}">${(f.options||['Todos']).map(o=>`<option>${o}</option>`).join('')}</select>`
      : `<input id="${f.id||''}" placeholder="${f.placeholder||''}" value="${f.value||''}">`}${f.small?`<small>${f.small}</small>`:''}</div>`).join('')
  }</div></div>`;
}
function table(headers, rows, empty='Nenhum registro encontrado.'){
  return `<div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.length?rows.join(''):`<tr><td colspan="${headers.length}" class="empty">${empty}</td></tr>`}</tbody></table></div>`;
}
function kpis(items){
  return `<div class="kpi-grid">${items.map(i=>`<div class="card kpi"><div class="kpi-icon ${i.c}">${i.icon}</div><div><span>${i.label}</span><strong>${i.value}</strong></div></div>`).join('')}</div>`;
}

function dashboard(){
  const total = state.pedidos.reduce((a,b)=>a+b.valor,0);
  const paid = state.pedidos.reduce((a,b)=>a+b.pago,0);
  const pending = state.pedidos.filter(p=>!['Entregue','Faturado'].includes(p.status)).length;
  const rows = state.pedidos.slice(-5).map(p => orderRow(p));
  return pageHead('Dashboard', 'Visão geral comercial, financeira, operacional e industrial da Next Agrolink.',
    `<button class="btn secondary" onclick="exportar('dashboard')">Exportar</button><button class="btn primary" onclick="novoPedido()">Novo Pedido</button>`) +
  kpis([
    {icon:'R$', label:'Total vendido no mês', value:BRL(total), c:'p'},
    {icon:'↗', label:'Total vendido hoje', value:BRL(27680.40), c:'g'},
    {icon:'▤', label:'Total de pedidos', value:state.pedidos.length, c:'b'},
    {icon:'%', label:'Comissões a pagar', value:BRL(total*.0755), c:'y'},
    {icon:'!', label:'Pedidos pendentes', value:pending, c:'r'},
    {icon:'NF', label:'Pedidos faturados', value:state.pedidos.filter(p=>p.status==='Faturado').length, c:'b'},
    {icon:'✓', label:'Pedidos entregues', value:state.pedidos.filter(p=>p.status==='Entregue').length, c:'g'},
    {icon:'TM', label:'Ticket médio', value:BRL(total/state.pedidos.length), c:'p'}
  ]) +
  `<div class="grid-2">
    <div class="card panel"><div class="panel-title"><h2>Gráfico de vendas por mês</h2><span>12 últimos meses</span></div>${chart()}</div>
    <div class="card panel"><div class="panel-title"><h2>Estados com maior volume</h2><span>Safra atual</span></div>${statesVolume()}</div>
  </div>
  <div class="grid-3">
    ${simplePanel('Produtos mais vendidos', [['Fertilizante OM 02-10-06','48 un'],['Fertilizante OM 04-12-10','42 un'],['Magnetto Nitropotássico','39 un']])}
    ${simplePanel('Top representantes', state.representantes.map(r=>[r.nome, BRL(r.vendido)]))}
    ${simplePanel('Alertas inteligentes', [['Produtos vencendo','2'],['Estoque baixo','4'],['Entregas atrasadas','1'],['Registro MAPA próximo do vencimento','1']])}
  </div>
  <div class="card panel"><div class="panel-title"><h2>Últimos pedidos realizados</h2><span>Fluxo PDF + ERP Agro</span></div>${table(['Pedido','Data','Cliente','Representante','Cidade/UF','Valor','Status','Ações'], rows)}</div>`;
}
function chart(){
  const max = Math.max(...state.dashboardSales);
  return `<div class="chart">${state.dashboardSales.map((v,i)=>`<div class="bar-item"><span>${BRL(v)}</span><div class="bar" style="height:${Math.max(32, v/max*190)}px"></div><small>${state.dashboardMonths[i]}</small></div>`).join('')}</div>`;
}
function statesVolume(){
  return `<div class="stat-list">
    ${[['MS','R$ 312.450,00',82],['GO','R$ 198.200,00',56],['MT','R$ 125.800,00',38],['PR','R$ 94.600,00',25]].map(r =>
      `<div><div class="stat-row"><span>${r[0]}</span><strong>${r[1]}</strong></div><div class="progress"><i style="width:${r[2]}%"></i></div></div>`).join('')}
  </div>`;
}
function simplePanel(title, items){
  return `<div class="card panel"><div class="panel-title"><h2>${title}</h2></div><div class="stat-list">${items.map(i=>`<div class="stat-row"><span>${i[0]}</span><strong>${i[1]}</strong></div>`).join('')}</div></div>`;
}

function clientes(){
  const term = (document.getElementById('globalSearch')?.value || '').toLowerCase();
  const list = state.clientes.filter(c => !term || JSON.stringify(c).toLowerCase().includes(term));
  return pageHead('Clientes', 'Gerencie produtores, fazendas, consultores e potencial agrícola.',
    `<button class="btn secondary" onclick="showToast('Importação simulada com sucesso')">Importar Planilha</button><button class="btn primary" onclick="novoCliente()">+ Novo Cliente</button>`) +
    filters([{label:'Buscar', id:'filterClientes', placeholder:'Nome, documento, cidade ou telefone...'}, {label:'Estado', type:'select', options:['Todos','MS','GO','MT','PR']}, {label:'Status', type:'select', options:['Todos','Ativo','Inativo']}]) +
    `<div class="card panel">${table(['Nome','Contato','Documento','Cidade/Estado','Área plantada','Potencial','Status','Ações'],
      list.map(c=>`<tr><td><div class="name-cell"><div class="avatar-mini">${c.nome[0]}</div><button class="link-btn" onclick="verCliente(${c.id})">${esc(c.nome)}</button></div></td><td>${c.telefone}</td><td>${c.documento}</td><td>${c.cidade}/${c.uf}</td><td>${c.area}</td><td>${c.potencial}</td><td>${badge(c.status)}</td><td><div class="table-actions"><button class="link-btn" onclick="verCliente(${c.id})">Ver</button><button class="link-btn" onclick="editarCliente(${c.id})">Editar</button><button class="link-btn danger" onclick="excluirCliente(${c.id})">Excluir</button></div></td></tr>`))}</div>`;
}
function novoCliente(){ editarCliente(null); }
function editarCliente(id){
  const c = id ? state.clientes.find(x=>x.id===id) : {nome:'', telefone:'', documento:'', cidade:'', uf:'MS', area:'', fazenda:'', culturas:'', potencial:'Médio', status:'Ativo'};
  modal(id?'Editar Cliente':'Novo Cliente', formCliente(c), () => {
    const data = getFormData(['nome','telefone','documento','cidade','uf','area','fazenda','culturas','potencial','status']);
    if(id) Object.assign(c, data); else state.clientes.push({id:Date.now(), ...data});
    render(); showToast(id?'Cliente atualizado':'Cliente cadastrado');
  }, 'Salvar');
}
function formCliente(c){
  return `<div class="form-grid">
    ${input('nome','Nome',c.nome)}${input('telefone','Telefone',c.telefone)}${input('documento','CPF/CNPJ',c.documento)}
    ${input('cidade','Cidade',c.cidade)}${select('uf','UF',['MS','GO','MT','PR'],c.uf)}${input('area','Área plantada',c.area)}
    ${input('fazenda','Fazenda',c.fazenda)}${input('culturas','Culturas',c.culturas)}${select('potencial','Potencial',['Baixo','Médio','Alto','Estratégico'],c.potencial)}
    ${select('status','Status',['Ativo','Inativo'],c.status)}
  </div>`;
}
function verCliente(id){ state.selectedClient = state.clientes.find(c=>c.id===id); setPage('clienteDetalhe'); }
function excluirCliente(id){ modal('Excluir Cliente','<p>Tem certeza que deseja excluir este cliente?</p>',()=>{state.clientes=state.clientes.filter(c=>c.id!==id);render();showToast('Cliente excluído');},'Excluir'); }

function clienteDetalhe(){
  const c = state.selectedClient || state.clientes[0];
  return pageHead(`Cliente: ${esc(c.nome)}`, 'Cadastro agrícola completo com fazendas, áreas, culturas, histórico comercial e visitas técnicas.',
    `<button class="btn secondary" onclick="setPage('clientes')">Voltar</button><button class="btn primary" onclick="editarCliente(${c.id})">Editar Cliente</button>`) +
  `<div class="grid-2">
    <div class="card panel"><h2>Dados do Cliente</h2><div class="detail-grid">
      ${detail('Nome',c.nome)}${detail('Telefone',c.telefone)}${detail('Documento',c.documento)}${detail('Cidade/UF',`${c.cidade}/${c.uf}`)}${detail('Potencial',c.potencial)}${detail('Status',badge(c.status))}
    </div></div>
    <div class="card panel"><h2>Dados Agrícolas</h2><div class="detail-grid">
      ${detail('Fazenda',c.fazenda)}${detail('Área plantada',c.area)}${detail('Culturas',c.culturas)}${detail('Talhões','12')}${detail('Consultor','Eng. Agrônomo Marcos')}${detail('Última compra','04/05/2026')}
    </div></div>
  </div>
  <div class="card panel"><div class="panel-title"><h2>Histórico Comercial</h2><button class="btn primary" onclick="showToast('Visita técnica registrada')">Nova Visita</button></div>${table(['Data','Tipo','Descrição','Valor','Status'],[
    `<tr><td>04/05/2026</td><td>Pedido</td><td>Fertilizantes Organominerais</td><td>R$ 18.886,25</td><td>${badge('Entregue')}</td></tr>`,
    `<tr><td>18/04/2026</td><td>Visita</td><td>Recomendação técnica safra soja</td><td>-</td><td>${badge('Concluída')}</td></tr>`
  ])}</div>`;
}

function produtos(){
  return pageHead('Produtos', 'Lista de insumos agrícolas, preços, estoque, validade e status comercial.',
    `<button class="btn secondary" onclick="setPage('precos')">Lista de Preços UF</button><button class="btn primary" onclick="novoProduto()">+ Novo Produto</button>`) +
  filters([{label:'Buscar', placeholder:'Nome comercial, SKU, código ou categoria...'}, {label:'Categoria', type:'select', options:['Todas','Fertilizante','Herbicida','Inseticida','Fungicida','Adjuvante','Bioinsumo','Semente']}, {label:'Status', type:'select', options:['Todos','Liberado','Atenção','Bloqueado']}]) +
  `<div class="card panel">${table(['Descrição','SKU','Embalagem','Unidade','Categoria','Estoque','Validade','Status','Ações'],
    state.produtos.map(p=>`<tr><td><button class="link-btn" onclick="verProduto(${p.id})">${esc(p.nome)}</button></td><td>${p.sku}</td><td>${p.embalagem}</td><td>${p.unidade}</td><td>${p.categoria}</td><td>${p.estoque}</td><td>${p.validade}</td><td>${badge(p.status)}</td><td><div class="table-actions"><button class="link-btn" onclick="verProduto(${p.id})">Ver</button><button class="link-btn" onclick="editarProduto(${p.id})">Editar</button><button class="link-btn danger" onclick="excluirProduto(${p.id})">Excluir</button></div></td></tr>`))}</div>`;
}
function novoProduto(){ state.selectedProduct = null; setPage('cadastroProduto'); }
function editarProduto(id){ state.selectedProduct = state.produtos.find(p=>p.id===id); setPage('cadastroProduto'); }
function verProduto(id){ state.selectedProduct = state.produtos.find(p=>p.id===id); setPage('produtoDetalhe'); }
function excluirProduto(id){ modal('Excluir Produto','<p>Tem certeza que deseja excluir este produto?</p>',()=>{state.produtos=state.produtos.filter(p=>p.id!==id);render();showToast('Produto excluído');},'Excluir'); }

function produtoDetalhe(){
  const p = state.selectedProduct || state.produtos[0];
  return pageHead(`Produto: ${esc(p.nome)}`, 'Consulta detalhada do produto, preços por UF, estoque, lote e condições comerciais.',
    `<button class="btn secondary" onclick="setPage('produtos')">Voltar</button><button class="btn primary" onclick="editarProduto(${p.id})">Editar Cadastro</button>`) +
  kpis([
    {icon:'SKU',label:'Código SKU',value:p.sku,c:'p'},
    {icon:'Kg',label:'Estoque',value:p.estoque,c:'g'},
    {icon:'%',label:'Comissão',value:p.comissao+'%',c:'y'},
    {icon:'UF',label:'Estados',value:'4',c:'b'}
  ]) +
  `<div class="card panel"><h2>Características do Produto</h2><div class="detail-grid">
    ${detail('Nome comercial',p.nome)}${detail('Categoria',p.categoria)}${detail('Embalagem',p.embalagem)}${detail('Natureza física',p.natureza)}
    ${detail('Lote',p.lote)}${detail('Validade',p.validade)}${detail('Class. Toxicológica','Não Classificado')}${detail('Receita?','Não')}
  </div></div>
  <div class="card panel"><h2>Preço por Estado</h2>${table(['Estado','Preço','Frete','Prazo','Status'],[
    `<tr><td>MS</td><td>${BRL(p.preco)}</td><td>CIF</td><td>2 dias</td><td>${badge('Disponível')}</td></tr>`,
    `<tr><td>MT</td><td>${BRL(p.preco+150)}</td><td>FOB</td><td>5 dias</td><td>${badge('Disponível')}</td></tr>`,
    `<tr><td>GO</td><td>${BRL(p.preco+100)}</td><td>CIF</td><td>4 dias</td><td>${badge('Disponível')}</td></tr>`,
    `<tr><td>PR</td><td>${BRL(p.preco-200)}</td><td>CIF</td><td>6 dias</td><td>${badge('Disponível')}</td></tr>`
  ])}</div>`;
}

function cadastroProduto(){
  const p = state.selectedProduct || {nome:'', sku:'', embalagem:'Saco 25kg', unidade:'Kg', natureza:'Farelado', categoria:'Fertilizante', estoque:0, reservado:0, lote:'', validade:'', status:'Liberado', preco:0, comissao:0};
  return pageHead(state.selectedProduct?'Editar Produto':'Cadastro de Produto', 'Cadastro completo: agronômico, regulatório, embalagem, estoque, comercial, geografia, documentos e produção.',
    `<button class="btn secondary" onclick="setPage('produtos')">Voltar</button><button class="btn primary" onclick="salvarProduto()">Salvar Produto</button>`) +
  `<div class="side-detail">
    <aside class="card panel"><div class="product-photo">Foto / embalagem<br>do produto</div>
      <div class="stat-list">
        <div class="stat-row"><span>Status</span><strong>${p.status}</strong></div>
        <div class="stat-row"><span>Estoque</span><strong>${p.estoque} kg</strong></div>
        <div class="stat-row"><span>Reservado</span><strong>${p.reservado} kg</strong></div>
        <div class="stat-row"><span>Comissão</span><strong>${p.comissao}%</strong></div>
      </div>
    </aside>
    <div>
      <div class="tabs">
        ${['dados','agro','regulatorio','logistica','estoque','comercial','geo','docs','producao'].map((t,i)=>`<button class="tab ${i===0?'active':''}" onclick="openTab('${t}', this)">${tabName(t)}</button>`).join('')}
      </div>

      <form id="produtoForm">
        ${produtoSection('dados','Dados Gerais',`
          ${input('nome','Nome comercial',p.nome,'two')}${input('sku','SKU',p.sku)}${input('codigo','Código interno',p.id?String(p.id).padStart(6,'0'):'')}${input('barras','Código de barras','7890001350001')}
          ${select('categoria','Categoria',['Herbicida','Inseticida','Fungicida','Fertilizante','Adjuvante','Corretivo','Bioinsumo','Semente','Outros'],p.categoria)}
          ${input('tecnico','Nome técnico','Fertilizante Organomineral Granulado')}${input('marca','Marca','Next Agrolink')}${input('fabricante','Fabricante','Next Agrolink')}
        `, true)}
        ${produtoSection('agro','Informações Agronômicas',`
          ${input('classe','Classe agronômica','Fertilizante de solo')}${input('cultura','Cultura indicada','Soja, milho, algodão, cana')}${input('finalidade','Finalidade','Nutrição e correção de fertilidade')}
          ${input('modo','Modo de ação','Fornecimento gradual')}${input('grupo','Grupo químico','Organomineral NPK')}${select('formulacao','Formulação',['GR - Granulado','WG','SC','EC','SL'],'GR - Granulado')}
          ${textarea('garantias','Garantias / composição','N: 02%, P2O5: 10%, K2O: 06%, matéria orgânica e condicionadores de solo.','full')}
        `)}
        ${produtoSection('regulatorio','Regulatório',`
          ${input('mapa','Registro MAPA','MS-000135/2026')}${input('anvisa','Registro ANVISA','Não aplicável')}${input('ibama','Registro IBAMA','Não aplicável')}
          ${select('tox','Classe toxicológica',['Não Classificado','I','II','III','IV'],'Não Classificado')}${input('ambiental','Classe ambiental','Não classificado')}${input('onu','Número ONU','Não aplicável')}
          ${select('receita','Necessita receituário?',['Não','Sim'],'Não')}${select('controlado','Produto controlado?',['Não','Sim'],'Não')}${select('perigoso','Perigoso para transporte?',['Não','Sim'],'Não')}
        `)}
        ${produtoSection('logistica','Embalagem e Logística',`
          ${select('embalagem','Tipo embalagem',['Saco 25kg','Big bag','Caixa','Bombona','Frasco','Tambor','Granel'],p.embalagem)}${input('liquido','Conteúdo líquido','1000')}${select('unidade','Unidade',['Kg','Litro','Tonelada','Unidade'],p.unidade)}
          ${input('bruto','Peso bruto','1.025 kg')}${input('peso','Peso líquido','1.000 kg')}${input('dimensoes','Dimensões','1,20 x 1,20 x 1,20')}
          ${input('caixa','Quantidade por caixa','0')}${input('pallet','Quantidade por pallet','1')}${input('armazenamento','Armazenamento','Local seco, ventilado e coberto')}
        `)}
        ${produtoSection('estoque','Estoque e Lote',`
          ${input('estoque','Estoque disponível',p.estoque)}${input('minimo','Estoque mínimo','300')}${input('reservado','Estoque reservado',p.reservado)}
          ${input('bloqueado','Estoque bloqueado','0')}${input('lote','Lote',p.lote)}${input('validade','Validade',p.validade)}
        `)}
        ${produtoSection('comercial','Comercial',`
          ${input('preco','Preço base',p.preco)}${input('fixa','Comissão fixa','0')}${input('comissao','Comissão percentual',p.comissao)}
          ${input('desconto','Desconto máximo','5%')}${input('pedidoMinimo','Pedido mínimo','1 Ton')}${input('multipla','Quantidade múltipla','1 Ton')}
        `)}
        ${produtoSection('geo','Disponibilidade Geográfica',`
          <div class="field full"><label>Estados atendidos</label><div class="check-grid">${['MS','MT','GO','PR','SP','MG','RS','SC','TO','BA','PA','RO'].map(uf=>`<label class="check"><input type="checkbox" ${['MS','MT','GO','PR'].includes(uf)?'checked':''}> ${uf}</label>`).join('')}</div></div>
          ${select('atendimento','Forma de atendimento',['Estado inteiro','Cidades específicas'],'Estado inteiro')}${input('cidades','Cidades específicas','Dourados, Rio Brilhante, Maracaju, Ponta Porã','two')}
          <div class="field full">${table(['Estado','Preço','Frete','Prazo'],['MS','MT','GO','PR'].map(uf=>`<tr><td>${uf}</td><td><input value="${uf==='MS'?BRL(p.preco):BRL(p.preco+100)}"></td><td><select><option>CIF</option><option>FOB</option></select></td><td><input value="${uf==='MS'?'2':'5'} dias"></td></tr>`))}</div>
        `)}
        ${produtoSection('docs','Documentos',`<div class="field full"><label>Anexos</label><div class="upload-grid"><button type="button" class="upload" onclick="fakeUpload('FISPQ')">Upload FISPQ</button><button type="button" class="upload" onclick="fakeUpload('Bula')">Upload Bula</button><button type="button" class="upload" onclick="fakeUpload('Certificado')">Certificado</button><button type="button" class="upload" onclick="fakeUpload('Imagem')">Imagem</button></div></div>`)}
        ${produtoSection('producao','Produção',`
          ${input('materia','Matéria-prima','Composto orgânico + fontes NPK')}${input('formula','Fórmula','FORM-OM-02-10-06')}${select('processo','Processo',['Granulação','Mistura','Envase'],'Granulação')}
          ${textarea('qualidade','Controle de qualidade obrigatório','Análise NPK, umidade, granulometria, peso líquido e conformidade do lote.','full')}
        `)}
      </form>
    </div>
  </div>`;
}
function tabName(t){return {dados:'Dados Gerais',agro:'Agronômico',regulatorio:'Regulatório',logistica:'Logística',estoque:'Estoque',comercial:'Comercial',geo:'Geografia',docs:'Documentos',producao:'Produção'}[t];}
function produtoSection(id,title,inner,active=false){return `<section id="tab-${id}" class="tab-content ${active?'active':''}"><div class="card panel"><h2>${title}</h2><div class="form-grid">${inner}</div></div></section>`;}
function openTab(id, el){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
}
function salvarProduto(){
  const data = getFormData(['nome','sku','categoria','embalagem','unidade','estoque','reservado','lote','validade','preco','comissao']);
  data.estoque = Number(data.estoque || 0); data.reservado = Number(data.reservado || 0); data.preco = Number(String(data.preco).replace(/[^\d.,]/g,'').replace('.','').replace(',','.')) || 0; data.comissao = Number(String(data.comissao).replace(',','.')) || 0;
  data.natureza = 'Farelado'; data.status = 'Liberado';
  if(state.selectedProduct){
    Object.assign(state.selectedProduct, data);
    showToast('Produto atualizado com sucesso');
  } else {
    state.produtos.push({id:Date.now(), ...data});
    showToast('Produto cadastrado com sucesso');
  }
  state.selectedProduct = null;
  setPage('produtos');
}
function fakeUpload(name){ showToast(`${name} anexado ao protótipo`); }

function pedidos(){
  return pageHead('Pedidos', 'Consulta de pedidos com filtros por número, cliente, representante, produto, estado, cidade e período.',
    `<button class="btn primary" onclick="novoPedido()">+ Novo Pedido</button>`) +
  filters([{label:'Nº Pedido', placeholder:'000126'}, {label:'Cliente', placeholder:'Nome do cliente'}, {label:'Status', type:'select', options:['Todos','Em análise','Aguardando pagamento','Pago','Em separação','Faturado','Em transporte','Entregue','Cancelado']}]) +
  `<div class="card panel">${table(['Pedido','Data','Cliente','Representante','Cidade/UF','Valor','Status','Ações'], state.pedidos.map(orderRow))}</div>`;
}
function orderRow(p){
  return `<tr><td><button class="link-btn" onclick="verPedido('${p.id}')">${p.id}</button></td><td>${p.data}</td><td>${esc(p.cliente)}</td><td>${p.representante}</td><td>${p.cidade}</td><td>${BRL(p.valor)}</td><td>${badge(p.status)}</td><td><div class="table-actions"><button class="link-btn" onclick="verPedido('${p.id}')">Ver</button><button class="link-btn" onclick="editarPedido('${p.id}')">Editar</button><button class="link-btn danger" onclick="excluirPedido('${p.id}')">Excluir</button></div></td></tr>`;
}
function novoPedido(){ editarPedido(null); }
function editarPedido(id){
  const p = id ? state.pedidos.find(x=>x.id===id) : {id:'',data:new Date().toLocaleDateString('pt-BR'),cliente:state.clientes[0]?.nome||'',representante:'Bruno Cavalcante',cidade:'Rio Brilhante/MS',valor:0,status:'Em análise',vencimento:'30/03/2027',pago:0};
  modal(id?'Editar Pedido':'Novo Pedido', `<div class="form-grid">
    ${input('pid','Pedido',p.id||String(Math.floor(Math.random()*900000)).padStart(6,'0'))}${input('pdata','Data',p.data)}${input('pcliente','Cliente',p.cliente)}
    ${input('prep','Representante',p.representante)}${input('pcidade','Cidade/UF',p.cidade)}${input('pvalor','Valor',p.valor)}
    ${select('pstatus','Status',['Em análise','Aguardando pagamento','Pago','Em separação','Faturado','Em transporte','Entregue','Cancelado'],p.status)}
    ${input('pvenc','Vencimento',p.vencimento)}${input('ppago','Pago',p.pago)}
  </div>`,()=>{
    const d = getFormData(['pid','pdata','pcliente','prep','pcidade','pvalor','pstatus','pvenc','ppago']);
    const obj = {id:d.pid,data:d.pdata,cliente:d.pcliente,representante:d.prep,cidade:d.pcidade,valor:Number(String(d.pvalor).replace(',','.'))||0,status:d.pstatus,vencimento:d.pvenc,pago:Number(String(d.ppago).replace(',','.'))||0};
    if(id) Object.assign(p,obj); else state.pedidos.push(obj);
    render(); showToast(id?'Pedido atualizado':'Pedido criado');
  },'Salvar');
}
function verPedido(id){ state.selectedOrder = state.pedidos.find(p=>p.id===id); setPage('pedidoDetalhe'); }
function excluirPedido(id){ modal('Excluir Pedido','<p>Tem certeza que deseja excluir este pedido?</p>',()=>{state.pedidos=state.pedidos.filter(p=>p.id!==id);render();showToast('Pedido excluído');},'Excluir'); }

function pedidoDetalhe(){
  const p = state.selectedOrder || state.pedidos[0];
  return pageHead(`Pedido nº ${p.id}`, 'Dados do cliente, fazenda, entrega, produtos, financeiro, crédito e comissão.',
    `<button class="btn secondary" onclick="setPage('pedidos')">Voltar</button><button class="btn primary" onclick="editarPedido('${p.id}')">Editar Pedido</button>`) +
  `<div class="card panel"><div class="panel-title"><h2>Timeline do Pedido</h2></div><div class="timeline"><div class="step done">Criado</div><div class="step done">Crédito</div><div class="step done">Produção</div><div class="step done">Faturado</div><div class="step done">Expedido</div><div class="step done">Entregue</div></div></div>
  <div class="grid-2">
    <div class="card panel"><h2>Dados do Cliente</h2><div class="detail-grid">${detail('Cliente',p.cliente)}${detail('CPF/CNPJ','39.597.359/0002-76')}${detail('Endereço','Rua 14 de Setembro, 2506')}${detail('Telefone','(35) 99867-1687')}${detail('Município',p.cidade)}${detail('CEP','86.492-196')}</div></div>
    <div class="card panel"><h2>Dados da Fazenda</h2><div class="detail-grid">${detail('Fazenda','Água Fria')}${detail('Inscrição Estadual','23.687.339-6')}${detail('Endereço','Estrada Municipal MC 167 Km 26 + 4 km esq')}${detail('Área plantada','780 ha')}${detail('Culturas','Soja / Milho')}${detail('Status',badge(p.status))}</div></div>
  </div>
  <div class="card panel"><h2>Roteiro da entrega</h2><p>Confirmar o dia da entrega para o cliente abrir o portão. Entrar na placa da fazenda Sol Nascente, andar 4km, virar à esquerda no trevo e andar + 6 km.</p></div>
  <div class="card panel"><h2>Produtos do Pedido</h2>${table(['Quant.','Unidade','Produto','Unitário','Total'],[
    `<tr><td>25</td><td>Kg</td><td>Fertilizante Organomineral 02-10-06</td><td>R$ 30,85</td><td>R$ 96,25</td></tr>`,
    `<tr><td>300</td><td>Kg</td><td>Fertilizante Organomineral 04-12-10</td><td>R$ 30,60</td><td>R$ 9.180,00</td></tr>`,
    `<tr><td>40</td><td>Kg</td><td>Fertilizante Organomineral 01-08-06</td><td>R$ 130,00</td><td>R$ 5.200,00</td></tr>`,
    `<tr><td>180</td><td>Kg</td><td>Fertilizante Organomineral 08-10-02</td><td>R$ 24,50</td><td>R$ 4.410,00</td></tr>`
  ])}<h2 style="text-align:right;margin-top:16px;color:var(--primary)">Total: ${BRL(p.valor)}</h2></div>
  <div class="grid-3">
    <div class="card panel"><h2>Financeiro</h2><p><b>Condição:</b> A Prazo</p><p><b>Vencimento:</b> ${p.vencimento}</p><p><b>Barter:</b> Troca por grão R$ 125,00 / Sc soja.</p></div>
    <div class="card panel"><h2>Crédito</h2><p><b>Aprovado:</b> Sim</p><p><b>Status:</b> ${p.status}</p></div>
    <div class="card panel"><h2>Comissão</h2><p><b>Apurado:</b> ${BRL(p.valor*.0755)}</p><p><b>Status:</b> Apurada</p></div>
  </div>`;
}

function vendas(){
  return pageHead('Vendas', 'Relatório de vendas e recebimentos por cliente, período, produto e safra.',
    `<button class="btn secondary" onclick="exportar('vendas')">Exportar</button>`) +
  kpis([
    {icon:'R$',label:'Vendas líquidas',value:BRL(state.pedidos.reduce((a,b)=>a+b.valor,0)),c:'p'},
    {icon:'✓',label:'Valor recebido',value:BRL(state.pedidos.reduce((a,b)=>a+b.pago,0)),c:'g'},
    {icon:'!',label:'Valor a receber',value:BRL(state.pedidos.reduce((a,b)=>a+(b.valor-b.pago),0)),c:'y'},
    {icon:'TM',label:'Ticket médio',value:BRL(state.pedidos.reduce((a,b)=>a+b.valor,0)/state.pedidos.length),c:'b'}
  ]) + filters([{label:'Período', value:'01/06/2025 - 30/10/2025'}, {label:'Recebimento', type:'select', options:['Somente contas a receber','Todos','Recebido','Vencido']}, {label:'Cliente', type:'select', options:['Todos',...state.clientes.map(c=>c.nome)]}]) +
  `<div class="card panel">${table(['Pedido','Data','Cliente','Valor','Vencimento','Pago','Status'],
    state.pedidos.map(p=>`<tr><td>${p.id}</td><td>${p.data}</td><td>${p.cliente}</td><td>${BRL(p.valor)}</td><td>${p.vencimento}</td><td>${BRL(p.pago)}</td><td>${badge(p.pago>=p.valor?'Recebido':'Em aberto')}</td></tr>`))}</div>`;
}
function comissoes(){
  return pageHead('Comissões', 'Gestão de comissões por pedido, representante, produto e período.',
    `<button class="btn secondary" onclick="showToast('Fechamento de comissão simulado')">Fechar Comissão</button><button class="btn primary" onclick="showToast('Comissões pagas no protótipo')">Pagar Selecionadas</button>`) +
  kpis([
    {icon:'%',label:'Apuradas',value:BRL(state.pedidos.reduce((a,b)=>a+b.valor*.0755,0)),c:'p'},
    {icon:'!',label:'A pagar',value:BRL(31440.20),c:'y'},
    {icon:'✓',label:'Pagas',value:BRL(15775.40),c:'g'},
    {icon:'TOP',label:'Representante líder',value:'Bruno',c:'b'}
  ]) +
  `<div class="card panel">${table(['Pedido','Representante','Cliente','Valor vendido','Comissão','Status'],
    state.pedidos.map(p=>`<tr><td>${p.id}</td><td>${p.representante}</td><td>${p.cliente}</td><td>${BRL(p.valor)}</td><td>${BRL(p.valor*.0755)}</td><td>${badge(p.status==='Entregue'?'Liberada':'Pendente')}</td></tr>`))}</div>`;
}

function representantes(){
  return moduleWithTable('Representantes', 'Metas, ranking, carteira, comissões e regiões de atuação.',
    kpis([
      {icon:'★', label:'Meta mês', value:'82%', c:'p'},
      {icon:'R$', label:'Vendido', value:BRL(527000), c:'g'},
      {icon:'%', label:'Comissão', value:BRL(39788), c:'y'},
      {icon:'▦', label:'Carteira', value:'137 clientes', c:'b'}
    ]),
    table(['Representante','Região','Meta','Vendido','Carteira','Comissão','Status'], state.representantes.map(r=>`<tr><td>${r.nome}</td><td>${r.regiao}</td><td>${BRL(r.meta)}</td><td>${BRL(r.vendido)}</td><td>${r.carteira}</td><td>${BRL(r.comissao)}</td><td>${badge(r.status)}</td></tr>`)),
    `<button class="btn primary" onclick="showToast('Novo representante criado no protótipo')">Novo Representante</button>`);
}
function estoque(){ return genericModule('Estoque','Controle de disponível, reservado, bloqueado, em produção, em trânsito e inventário.',
  [{icon:'▥',label:'Disponível',value:'18.420 kg',c:'g'},{icon:'▤',label:'Reservado',value:'4.260 kg',c:'y'},{icon:'!',label:'Bloqueado',value:'320 kg',c:'r'},{icon:'⇄',label:'Em trânsito',value:'7.800 kg',c:'b'}],
  [['OM-2601-MS','Fertilizante OM 02-10-06 / Lote liberado','Estoque','Liberado','Hoje'],['SH-2603','Shellt MV / lote vencendo','Qualidade','Atenção','Hoje'],['INV-0007','Inventário com divergência de 2,4%','Operação','Em análise','Ontem']]);}
function producao(){ return genericModule('Produção','Ordens de produção, fórmulas, matéria-prima, consumo, rendimento e lote.',
  [{icon:'OP',label:'OPs abertas',value:'6',c:'p'},{icon:'⚙',label:'Em produção',value:'3',c:'y'},{icon:'✓',label:'Finalizadas',value:'18',c:'g'},{icon:'%',label:'Rendimento',value:'96,8%',c:'b'}],
  [['OP-00041','Produção Fertilizante OM 02-10-06 / 5.000 kg','Produção','Em produção','Hoje'],['FORM-OM','Fórmula Organomineral 02-10-06','Engenharia','Aprovada','Ontem'],['MP-GLF','Entrada de matéria-prima para mistura','Almoxarifado','Conferida','Hoje']]);}
function qualidade(){ return genericModule('Qualidade','Laudos, amostras, aprovação, reprovação, certificados e histórico de análise.',
  [{icon:'✓',label:'Lotes aprovados',value:'21',c:'g'},{icon:'!',label:'Em análise',value:'4',c:'y'},{icon:'×',label:'Reprovados',value:'1',c:'r'},{icon:'PDF',label:'Laudos',value:'26',c:'b'}],
  [['LAU-2601','Análise NPK / lote OM-2601-MS','Qualidade','Aprovado','Hoje'],['AM-908','Amostra Shellt MV vencendo','Laboratório','Em análise','Hoje'],['CERT-22','Certificado de conformidade Fertilizante OM','Qualidade','Emitido','Ontem']]);}
function financeiro(){ return genericModule('Financeiro','Contas a receber, contas a pagar, fluxo de caixa, barter, CPR e inadimplência.',
  [{icon:'R$',label:'A receber',value:'R$ 204.512',c:'p'},{icon:'✓',label:'Recebido',value:'R$ 420.800',c:'g'},{icon:'!',label:'Vencido',value:'R$ 18.900',c:'r'},{icon:'CPR',label:'Barter/CPR',value:'12',c:'y'}],
  [['REC-000149','Recebimento safra 30/03/2027 / Barter soja','Financeiro','Em aberto','Hoje'],['PAG-00032','Fornecedor matéria-prima','Financeiro','A vencer','Hoje'],['FLX-06','Fluxo previsto 30 dias','Diretoria','Atualizado','Hoje']]);}
function logistica(){ return genericModule('Logística','Entregas, transportadoras, CT-e, MDF-e, rastreamento, roteiro e comprovantes.',
  [{icon:'🚚',label:'Entregas',value:'14',c:'b'},{icon:'✓',label:'Entregues',value:'9',c:'g'},{icon:'!',label:'Atrasadas',value:'1',c:'r'},{icon:'NF',label:'CT-e/MDF-e',value:'8',c:'p'}],
  [['ENT-000149','Entrega fazenda Água Fria / roteiro rural','Logística','Entregue','Hoje'],['CTE-8841','CT-e vinculado ao pedido 000178','Fiscal','Emitido','Ontem'],['MDF-2201','MDF-e transporte MS/GO','Fiscal','Em emissão','Hoje']]);}
function relatorios(){ return pageHead('Relatórios / BI','Vendas por estado, cidade, produto, representante, cliente, comissão e período.',
  `<button class="btn secondary" onclick="exportar('relatórios')">Exportar PDF</button>`) +
  kpis([{icon:'▰',label:'Dashboards',value:'5',c:'p'},{icon:'MS',label:'Top Estado',value:'R$ 312k',c:'g'},{icon:'TOP',label:'Top Produto',value:'OM 02-10-06',c:'b'},{icon:'%',label:'Comissão paga',value:'R$ 15,7k',c:'y'}]) +
  `<div class="grid-2"><div class="card panel"><h2>Vendas por mês</h2>${chart()}</div><div class="card panel"><h2>Estados com maior volume</h2>${statesVolume()}</div></div>` +
  genericModuleTable([['BI-VENDAS','Vendas por Estado, Cidade, Produto e Representante','Diretoria','Atualizado','Hoje'],['BI-COM','Comissão por representante, produto e período','Financeiro','Atualizado','Hoje'],['BI-CLI','Clientes estratégicos e potencial agrícola','Comercial','Atualizado','Hoje']]);
}
function auditoria(){ return genericModule('Auditoria','Logs de alterações, pedidos, financeiro, comissões, preços, estoque e permissões.',
  [{icon:'LOG',label:'Logs hoje',value:'38',c:'p'},{icon:'R$',label:'Hist. preço',value:'12',c:'y'},{icon:'▥',label:'Hist. estoque',value:'44',c:'b'},{icon:'🛡',label:'Permissões',value:'6 perfis',c:'g'}],
  [['LOG-8891','Bruno alterou preço MS de R$ 3.600 para R$ 3.800','Sistema','Registrado','Hoje'],['LOG-8892','Qualidade liberou lote OM-2601-MS','Sistema','Registrado','Hoje'],['LOG-8893','Financeiro alterou status do recebimento','Sistema','Em revisão','Ontem']]);}
function portal(){ return genericModule('Portal Representante','Pedidos, clientes, metas, comissões e visitas em layout simplificado mobile.',
  [{icon:'▤',label:'Meus pedidos',value:'18',c:'p'},{icon:'♙',label:'Clientes',value:'58',c:'b'},{icon:'%',label:'Comissão',value:'R$ 15,8k',c:'g'},{icon:'★',label:'Meta',value:'82%',c:'y'}],
  [['APP-01','Pedidos offline e consulta de estoque','Representante','Disponível','Hoje'],['VIS-22','Visita técnica com geolocalização','Representante','Agendada','Hoje'],['COM-REP','Extrato de comissão do representante','Financeiro','Liberado','Hoje']]);}
function precos(){ return genericModule('Categorias e Preços','Categorias, subcategorias, tabela de preço por estado, frete e prazo.',
  [{icon:'✦',label:'Categorias',value:'9',c:'p'},{icon:'UF',label:'Preços UF',value:'27',c:'b'},{icon:'CIF',label:'Fretes',value:'18',c:'g'},{icon:'⏱',label:'Prazos',value:'27',c:'y'}],
  [['CAT-FERT','Fertilizantes / Organomineral / Granulado','Produtos','Ativo','Hoje'],['PRC-MS','Tabela MS R$ 3.800,00 CIF 2 dias','Comercial','Ativa','Hoje'],['PRC-MT','Tabela MT R$ 3.950,00 FOB 5 dias','Comercial','Ativa','Hoje']]);}
function configuracoes(){ return genericModule('Configurações','Usuários, permissões, perfis de acesso e preferências do sistema.',
  [{icon:'👤',label:'Usuários',value:'4',c:'p'},{icon:'🛡',label:'Perfis',value:'6',c:'b'},{icon:'✓',label:'Ativos',value:'4',c:'g'},{icon:'LOG',label:'Logs',value:'100%',c:'y'}],
  [['ADM','Administrador geral com acesso completo','Sistema','Ativo','Hoje'],['REP','Representante com acesso restrito à carteira','Sistema','Ativo','Hoje'],['FIN','Financeiro com recebimentos e comissões','Sistema','Ativo','Hoje']]);}

function genericModule(title, subtitle, kpiItems, rows){
  return pageHead(title, subtitle, `<button class="btn secondary" onclick="exportar('${title}')">Exportar</button><button class="btn primary" onclick="showToast('Novo registro criado no protótipo')">Novo Registro</button>`) + kpis(kpiItems) + genericModuleTable(rows, title);
}
function moduleWithTable(title, subtitle, kpiHtml, tableHtml, actions=''){
  return pageHead(title, subtitle, actions) + kpiHtml + `<div class="card panel">${tableHtml}</div>`;
}
function genericModuleTable(rows, title='Registros'){
  return `<div class="card panel"><div class="panel-title"><h2>${title}</h2><span>Next Agrolink</span></div>${table(['Item','Descrição','Responsável','Status','Última atualização'], rows.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${badge(r[3])}</td><td>${r[4]}</td></tr>`))}</div>`;
}

function input(id,label,value='',extra=''){ return `<div class="field ${extra}"><label>${label}</label><input id="${id}" value="${esc(value)}"></div>`; }
function select(id,label,options,value='',extra=''){ return `<div class="field ${extra}"><label>${label}</label><select id="${id}">${options.map(o=>`<option ${o==value?'selected':''}>${o}</option>`).join('')}</select></div>`; }
function textarea(id,label,value='',extra=''){ return `<div class="field ${extra}"><label>${label}</label><textarea id="${id}">${esc(value)}</textarea></div>`; }
function detail(label,value){ return `<div class="detail"><label>${label}</label><span>${value}</span></div>`; }
function getFormData(ids){ const obj={}; ids.forEach(id=>{ const el=document.getElementById(id); obj[id]=el?el.value:''; }); return obj; }
function exportar(nome){ showToast(`Exportação de ${nome} simulada com sucesso`); }

function render(){
  const routes = {dashboard, clientes, clienteDetalhe, representantes, pedidos, pedidoDetalhe, vendas, comissoes, produtos, produtoDetalhe, cadastroProduto, precos, estoque, producao, qualidade, financeiro, logistica, relatorios, auditoria, portal, configuracoes};
  const fn = routes[state.page] || dashboard;
  const pageLabel = document.querySelector(`[data-page="${state.page}"]`)?.textContent?.trim() || state.page;
  breadcrumb.textContent = `Next Agrolink / ${pageLabel.replace(/[▣👤♟▤R$%✦＋⌑▥⚙✓⇄◈▰🛡☷]/g,'').trim()}`;
  content.innerHTML = fn();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-page]').forEach(btn => btn.addEventListener('click', () => setPage(btn.dataset.page)));
  document.getElementById('openSidebar').onclick = () => {document.getElementById('sidebar').classList.add('open');document.getElementById('overlay').classList.add('open');};
  document.getElementById('closeSidebar').onclick = () => {document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('open');};
  document.getElementById('overlay').onclick = () => {document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('open');};
  document.getElementById('modalClose').onclick = closeModal;
  document.getElementById('modalCancel').onclick = closeModal;
  document.getElementById('btnPerfil').onclick = () => setPage('configuracoes');
  document.getElementById('btnSair').onclick = () => showToast('Saída simulada. Em sistema real, encerraria a sessão.');
  document.getElementById('globalSearch').addEventListener('input', () => {
    if(['clientes','produtos','pedidos'].includes(state.page)) render();
  });
  render();
});
