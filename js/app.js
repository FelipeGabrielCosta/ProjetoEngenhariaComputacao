const DOMAIN_COLORS = ['#005f73', '#0a9396', '#94d2bd', '#e9d8a6', '#ee9b00'];

// =================================================================
// DADOS DOS PROJETOS (GLOBAL E BRASIL) - ATUALIZADOS COM FONTES
// =================================================================

const globalProjectsData = {
    // ... (Conteúdo de globalProjectsData do arquivo app.js original) ...
    "overview": {
        title: "Dashboard: Lições e Causas Raiz",
        intro: "Esta seção resume a análise dos 5 casos de falhas globais, destacando os domínios mais frequentes de falha e as metodologias de engenharia que servem como solução.",
        isCaseStudy: false,
        content: (analysisType) => `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div class="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <h3 class="text-xl font-semibold text-[#005f73] mb-4 flex items-center">Causas Raiz Comuns</h3>
                    <p class="text-gray-600 mb-4">Análise sistêmica das 10 causas primárias, distribuídas em 3 domínios principais.</p>
                    <div class="chart-container h-80 max-h-80 mx-auto">
                        <canvas id="domainChart-${analysisType}"></canvas>
                    </div>
                </div>

                <div class="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <h3 class="text-xl font-semibold text-[#005f73] mb-4 flex items-center">Síntese das Falhas e Soluções (RCA)</h3>
                    <p class="text-gray-600 mb-4">A solução reside sempre na aplicação de métodos de Engenharia de Sistemas, migrando do problema para uma metodologia de reformulação estruturada.</p>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projeto</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Causa Raiz Primária</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metodologia de Reformulação</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 text-sm">
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">Apple Lisa</td><td class="px-6 py-4">Desalinhamento Mercado/Custo</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Validação de Requisitos</td></tr>
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">Lidl SAP Debacle</td><td class="px-6 py-4">Customização Excessiva</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Fit-to-Standard e Gestão de Mudanças</td></tr>
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">Texas Child Support</td><td class="px-6 py-4">Requisitos Ambíguos e Voláteis</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Engenharia de Requisitos Sistemática (QNRs)</td></tr>
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">ASX CHESS</td><td class="px-6 py-4">Subestimação da Complexidade DLT</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Testes PoC Robustos e Governança</td></tr>
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">IBM Watson Oncology</td><td class="px-6 py-4">Viés de Dados e Falta de Clinical Fit</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Validação Clínica e Abordagem Emergente de IA</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-inner">
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Conclusão: O Imperativo da Engenharia de Processos</h3>
                <p class="text-sm text-gray-600">O denominador comum nas falhas é a negligência de práticas estabelecidas de Engenharia de Sistemas. A excelência técnica pura não é suficiente. O caminho para o sucesso reside na adoção rigorosa de metodologias como <strong>Engenharia de Requisitos (ER)</strong> e <strong>Gestão de Mudanças Organizacionais</strong>.</p>
            </div>
        `
    },
    "apple-lisa": {
        title: "Caso 1: Apple Lisa (1983)",
        intro: "O Lisa, apesar de ser tecnicamente brilhante, foi um fracasso comercial retumbante. A falha não foi tecnológica, mas de mercado.",
        isCaseStudy: true,
        sections: [
            { title: "Identificação das Principais Falhas", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Gerencial e Econômica (Preço Proibitivo):</strong> Lançado a US$ 10.000, inacessível para o mercado.</li><li><strong>Comunicação e Marketing:</strong> Falha na educação do cliente sobre os benefícios da GUI.</li></ul>` },
            { title: "Proposta de Reformulação: Foco na Produtividade e Engenharia de Valor", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Redefinição da Proposta de Valor:</strong> Priorizar a função de acessibilidade e eficiência da GUI para produtividade.</li><li><strong>Engenharia de Valor:</strong> Implementar Contenção de Custo, visando um preço de mercado muito mais baixo.</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p>A Validação de Requisitos exige o envolvimento dos stakeholders para garantir que os <strong>requisitos não-funcionais</strong> (custo total) se alinhem com o contexto de uso.</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Análise Post-mortem:** Project management post-mortems: Apple's Lisa.</li>
                        <li>**Estudo de Caso:** Top 12 Project Management Failure Case Studies 2025.</li>
                        <li>**Referência Geral:** Project Failure Case Studies - PM 360 Consulting.</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'chart', id: 'lisaChart', config: { type: 'bar', data: { labels: ['Apple Lisa (1983)', 'Apple Macintosh (1984)'], datasets: [{ label: 'Preço de Lançamento (US$)', data: [10000, 2495], backgroundColor: [DOMAIN_COLORS[0], DOMAIN_COLORS[2]], }] }, options: { maintainAspectRatio: false, responsive: true, plugins: { title: { display: true, text: 'Desalinhamento de Preço: Lisa vs. Macintosh' }, legend: { display: false } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Preço (US$)' } } } } } }
    },
    "lidl-sap": {
        title: "Caso 2: Lidl SAP Debacle (€500 Milhões)",
        intro: "Projeto de 7 anos para implementar o SAP for Retail foi cancelado. O fracasso foi a recusa da Lidl em adaptar seus processos ao sistema padrão.",
        isCaseStudy: true,
        sections: [
            { title: "Identificação das Principais Falhas", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Gerencial e de Requisitos:</strong> Incompatibilidade fundamental: SAP usa preço de varejo; Lidl usava preço de compra.</li><li><strong>Organizacional (Customização Excessiva):</strong> Optou-se por customizar o SAP (custo e complexidade insustentável) em vez de adaptar os processos.</li></ul>` },
            { title: "Proposta de Reformulação: Estratégia Fit-to-Standard e Gestão de Mudanças", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Estratégia Fit-to-Standard:</strong> Limitar a customização e aceitar os princípios do software.</li><li><strong>Gestão de Mudanças Proativa:</strong> Foco em conciliar o modelo de negócio existente com o software, tratando a mudança de processos como um requisito de sucesso.</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p>Estudos empíricos em sistemas ERP demonstram o <strong>impacto negativo da customização excessiva na qualidade do software</strong>. A falha reforça que a <strong>Gestão de Mudanças Organizacionais</strong> é um requisito não-funcional crítico.</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Artigo Acadêmico:** Impact of customization over software quality in ERP projects: an empirical study.</li>
                        <li>**Análise de Caso:** Project Failure Case Studies - Henrico Dolfing.</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'chart', id: 'lidlChart', config: { type: 'doughnut', data: { labels: ['Custo da Falha (Customização Excessiva)', 'Outros Custos do Projeto (Estimativa)'], datasets: [{ data: [500, 100], backgroundColor: [DOMAIN_COLORS[0], DOMAIN_COLORS[3]], }] }, options: { maintainAspectRatio: false, responsive: true, plugins: { title: { display: true, text: 'Distribuição do Custo Gasto Antes do Cancelamento (€ Milhões)' }, legend: { position: 'bottom' }, tooltip: { callbacks: { label: function(context) { const value = context.parsed; return `${context.label}: €${value}M`; } } } }, animation: { animateScale: true } } } }
    },
    "texas-csec": {
        title: "Caso 3: Texas Child Support Enforcement System ($367M)",
        intro: "Projeto governamental cancelado. Exemplo arquetípico do fracasso da Engenharia de Requisitos em projetos complexos e politicamente voláteis.",
        isCaseStudy: true,
        sections: [
            { title: "Identificação das Principais Falhas", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Técnica/Gerencial:</strong> <strong>Requisitos Ambíguos e Instáveis</strong> (escopo flutuante) devido a múltiplos stakeholders.</li><li><strong>Qualidade do Sistema Crítico:</strong> Falha em incorporar <strong>Requisitos Não-Funcionais de Qualidade (QNRs)</strong>.</li></ul>` },
            { title: "Proposta de Reformulação: Engenharia de Requisitos de Qualidade (QER) e Governança", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Engenharia de Requisitos Sistemática:</strong> Adotar um processo de ER que garanta um entendimento consensual e estável do sistema.</li><li><strong>Controle de Escopo Formal:</strong> Instituir um *Change Control Board* (CCB) para mitigar a volatilidade política.</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p>A implementação da <strong>Engenharia de Requisitos</strong> é um <strong>fator crítico de sucesso</strong>, estruturando a análise (*Pressman*). A preocupação sistemática com QNRs é crucial para sistemas críticos.</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Artigo Acadêmico:** Um Método para Apoiar a Engenharia de Requisitos de Qualidade que Envolvem Ajustes Dinâmicos do Software.</li>
                        <li>**Artigo Acadêmico:** ENGENHARIA DE REQUISITOS E A ERGONOMIA COGNITIVA COMO FATORES CRÍTICOS DE SUCESSO NA PRODUÇÃO DE SOFTWARE.</li>
                        <li>**Referência Geral:** Project Failure Case Studies - PM 360 Consulting.</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'chart', id: 'texasChart', config: { type: 'bar', data: { labels: ['Falhas Atribuídas a Requisitos Ruins', 'Outras Causas de Falha'], datasets: [{ label: 'Percentual (%)', data: [48, 52], backgroundColor: [DOMAIN_COLORS[0], DOMAIN_COLORS[1]], }] }, options: { indexAxis: 'y', maintainAspectRatio: false, responsive: true, plugins: { title: { display: true, text: 'A Aflição Crônica da Falha de Requisitos (Estatística Média)' }, legend: { display: false } }, scales: { x: { beginAtZero: true, title: { display: true, text: 'Percentual de Falhas de Projetos (%)' }, max: 100 } } } } }
    },
    "asx-chess": {
        title: "Caso 4: ASX CHESS Replacement (Blockchain) ($250M)",
        intro: "Projeto para substituir o sistema de liquidação de ações por Blockchain. Suspenso devido a repetidos atrasos, sublinhando o risco da tecnologia disruptiva.",
        isCaseStudy: true,
        sections: [
            { title: "Identificação das Principais Falhas", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Técnica (Viabilidade Prematura):</strong> Subestimação da complexidade de integrar Blockchain em infraestrutura crítica.</li><li><strong>Gerencial (Dependência):</strong> Falha na gestão de risco e <strong>dependência excessiva de um único fornecedor</strong>.</li></ul>` },
            { title: "Proposta de Reformulação: Validação Faseada de Tecnologia e Governança Transparente", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Testes PoC Abrangentes:</strong> Investir em testes faseados, focados na validação da escalabilidade em volumes reais.</li><li><strong>Diversificação de Fornecedores:</strong> Implementar arquitetura de sistemas com <strong>múltiplos fornecedores</strong>.</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p>O sucesso requer uma abordagem holística que prioritize a <strong>governança transparente</strong> e a garantia de <strong>interoperabilidade e escalabilidade</strong>. A tecnologia DLT deve ser minuciosamente validada antes da implantação em sistemas de missão crítica.</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Artigo Acadêmico:** Exploring the failure factors of blockchain adopting projects: a case study of tradelens through the lens of commons theory.</li>
                        <li>**Pesquisa Relacionada:** Research on the Application of Blockchain Technology in Financial Risk Management.</li>
                        <li>**Referência Geral:** Project Failure Case Studies - Henrico Dolfing.</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'chart', id: 'asxChart', config: { type: 'bar', data: { labels: ['Orçamento Inicial (AUD)', 'Custo no Cancelamento (AUD)'], datasets: [{ label: 'Custo Estimado e Realizado (Milhões)', data: [200, 250], backgroundColor: [DOMAIN_COLORS[1], DOMAIN_COLORS[4]], }] }, options: { maintainAspectRatio: false, responsive: true, plugins: { title: { display: true, text: 'Estimativa vs. Custo no Cancelamento (Milhões de AUD)' }, legend: { display: false } }, scales: { y: { beginAtZero: true } } } } }
    },
    "ibm-watson": {
        title: "Caso 5: IBM Watson for Oncology ($4 Bilhões)",
        intro: "Comercializado como uma IA revolucionária, o Watson foi descontinuado. O projeto falhou por viés de dados e inconsistência clínica.",
        isCaseStudy: true,
        sections: [
            { title: "Identificação das Principais Falhas", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Técnica (Viés de Dados e Inconsistência Clínica):</strong> Treinado primariamente com dados U.S.-cêntricos.</li><li><strong>Gerencial (Hype vs. Clinical Fit):</strong> Foco no *hype* da IA, negligenciando a integração no fluxo de trabalho clínico (*Clinical Fit*).</li></ul>` },
            { title: "Proposta de Reformulação: Validação Multidisciplinar e Abordagem Emergente", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Validação Clínica Rigorosa:</strong> Auditorias de sistemas formais para garantir a <strong>equidade e a diversidade</strong> dos dados de treinamento.</li><li><strong>Abordagem Emergente e Human-in-the-Loop:</strong> Tratar o projeto como um processo emergente, envolvendo <strong>clínicos e não-pesquisadores de IA</strong>.</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p>A alta taxa de falha em projetos de IA na saúde demonstra que a causa raiz é a falta de <strong>prontidão dos dados</strong> (*data readiness*) e a superficialidade na compreensão dos fluxos clínicos. A mitigação de viés e a inclusão de *expertise* humana são requisitos de segurança comprovados (*Human-in-the-Loop*).</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Análise de Caso (Blog):** Case Study 20: The $4 Billion Al Failure of IBM Watson for Oncology.</li>
                        <li>**Artigo (Healthark):** IBM Watson: From healthcare canary to a failed prodigy.</li>
                        <li>**Artigo:** Why Al Projects Fail in Healthcare And How to Fix It.</li>
                        <li>**Artigo:** Overcoming Al Model Deployment Challenges.</li>
                        <li>**Artigo (Medium):** Why does implementation of Al fail so often in healthcare?.</li>
                        <li>**Referência (UE):** Inteligência artificial no domínio dos cuidados de saúde.</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'chart', id: 'watsonChart', config: { type: 'doughnut', data: { labels: ['Taxa de Falha em Projetos de IA na Saúde', 'Taxa de Sucesso (Estimativa)'], datasets: [{ data: [80, 20], backgroundColor: [DOMAIN_COLORS[4], DOMAIN_COLORS[1]], }] }, options: { maintainAspectRatio: false, responsive: true, plugins: { title: { display: true, text: 'Taxa de Insucesso em Projetos de IA (>80%)' }, legend: { position: 'bottom' } }, animation: { animateScale: true } } } }
    },
    // INÍCIO: NOVO CASO DE ESTUDO DO WII U
    "wii-u-failure": {
        title: "Caso Especial: Nintendo Wii U (2012)",
        intro: "Um fracasso comercial retumbante, que serviu como berço de ideias de sucesso para o Nintendo Switch. A falha foi sistêmica: má comunicação, engenharia de custo, e alta complexidade percebida.",
        isCaseStudy: true,
        sections: [
            { 
                title: "Análise da Falha: Marketing e Complexidade", 
                content: `
                    <ul class="list-disc list-inside space-y-2">
                        [cite_start]<li><strong>Falha de Comunicação:</strong> A nomenclatura "Wii U" e o design semelhante ao Wii causaram confusão, violando o princípio da clareza da proposta de valor[cite: 31, 32, 33].</li>
                        [cite_start]<li><strong>Complexidade de Engenharia:</strong> O GamePad exigia um subsistema de comunicação Wi-Fi de alta tecnologia (streaming de vídeo HD)[cite: 46, 47]. [cite_start]Cortes de custo neste subsistema levaram a problemas crônicos de latência e perda de sincronização[cite: 49, 50].</li>
                        [cite_start]<li><strong>UX e Desempenho:</strong> A lentidão do sistema operacional e da interface do usuário (UI) foi um "obstáculo" que degradou a experiência[cite: 57, 59, 62].</li>
                        [cite_start]<li><strong>Êxodo Third-Party:</strong> A arquitetura customizada, diferente do PS4/Xbox One, aumentou a complexidade e o custo de desenvolvimento, acelerando a defasagem[cite: 64, 66, 68].</li>
                    </ul>
                `
            },
            { 
                title: "Diagnóstico: Teoria da Difusão da Inovação (Rogers)", 
                content: `
                    <p>O fracasso é mapeado diretamente para os atributos da Teoria de Rogers:</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li><strong>Complexidade:</strong> Alta. [cite_start]Problemas técnicos (lentidão, falhas de sincronização) adicionaram atrito e instabilidade percebida[cite: 115, 116].</li>
                        <li><strong>Compatibilidade:</strong> Baixa. [cite_start]A semelhança com o Wii confundiu a identidade do console como uma nova plataforma essencial[cite: 118, 119].</li>
                        <li><strong>Vantagem Relativa:</strong> Obscurecida. [cite_start]O benefício do dual-screen não superava a defasagem de hardware para core gamers e a falta de catálogo third-party[cite: 122, 123].</li>
                    </ul>
                `
            },
            { 
                title: "Blueprint da Reformulação: O Sucesso do Switch", 
                content: `
                    [cite_start]<p>O Nintendo Switch (2017) corrigiu as falhas sistêmicas do Wii U com boas práticas de engenharia[cite: 71, 145]:</p>
                    <ul class="list-disc list-inside space-y-2">
                        [cite_start]<li><strong>Engenharia Modular:</strong> Substituição do GamePad por uma arquitetura híbrida verdadeira (display portátil + dock), com Joy-Cons destacáveis, permitindo flexibilidade sem complexidade de streaming[cite: 75, 76, 77].</li>
                        [cite_start]<li><strong>Otimização de UX/Desempenho:</strong> Menu otimizado para o acesso rápido ("três cliques de botão") ao jogo, erradicando a lentidão[cite: 90, 91, 93].</li>
                        [cite_start]<li><strong>Clareza de Valor:</strong> Nome "Nintendo Switch" comunica o ato central de mudar de modo instantaneamente, definindo uma Vantagem Relativa única (portabilidade)[cite: 82, 83, 140, 141].</li>
                        [cite_start]<li><strong>Arquitetura Acessível:</strong> Adoção de arquitetura Tegra (padrão) para minimizar o custo e a complexidade de *porting* para third-parties[cite: 96, 97].</li>
                    </ul>
                `
            },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        [cite_start]<li>**Análise:** Análise e Reformulação do Fracasso do Projeto Wii U[cite: 1, 2].</li>
                        [cite_start]<li>**Estudo de Caso:** Nintendo Wii U: A Anatomia do Fracasso Comercial[cite: 149].</li>
                        [cite_start]<li>**Lições Aprendidas:** What Nintendo Learned From the Wii U and Applied to the Switch[cite: 162].</li>
                        [cite_start]<li>**Teoria de Rogers:** Difusão de inovações: apreciação crítica dos estudos de Rogers[cite: 170].</li>
                    </ul>
                `
            }
        ],
        visualization: { 
            type: 'chart', 
            id: 'wiiUComparisonChart', 
            config: { 
                type: 'bar', 
                data: { 
                    labels: ['Wii U', 'Nintendo Switch'], 
                    datasets: [{ 
                        label: 'Vendas Totais Estimadas (Milhões de Unidades)', 
                        data: [13.56, 141.32],
                        backgroundColor: [DOMAIN_COLORS[0], DOMAIN_COLORS[2]], 
                    }] 
                }, 
                options: { 
                    maintainAspectRatio: false, 
                    responsive: true, 
                    plugins: { 
                        title: { display: true, text: 'Vendas: Wii U vs. Nintendo Switch (Projeção de Sucesso)' }, 
                        legend: { display: false } 
                    }, 
                    scales: { 
                        y: { 
                            beginAtZero: true, 
                            title: { display: true, text: 'Milhões de Unidades' } 
                        } 
                    } 
                } 
            } 
        }
    }
    // FIM: NOVO CASO DE ESTUDO DO WII U
};

const brazilProjectsData = {
    // ... (Conteúdo de brazilProjectsData do arquivo app.js original) ...
    "overview": {
        title: "Dashboard: Panorama das Falhas Brasileiras",
        intro: "Esta seção resume a análise dos 5 casos brasileiros, com foco nas causas de falha mais comuns em grandes projetos de infraestrutura e governo.",
        isCaseStudy: false,
        content: (analysisType) => `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div class="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <h3 class="text-xl font-semibold text-[#005f73] mb-4 flex items-center">Domínios de Falha</h3>
                    <p class="text-gray-600 mb-4">Em projetos brasileiros, o fator Político/Governança tem peso substancial, seguido por Planejamento Técnico e Gerenciamento de Infraestrutura.</p>
                    <div class="chart-container h-80 max-h-80 mx-auto">
                        <canvas id="domainChart-${analysisType}"></canvas>
                    </div>
                </div>

                <div class="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <h3 class="text-xl font-semibold text-[#005f73] mb-4 flex items-center">Síntese das Falhas e Soluções (Casos Brasil)</h3>
                    <p class="text-gray-600 mb-4">Reformular exige a aplicação de Engenharia de Sistemas e Governança para mitigar a volatilidade do ambiente nacional.</p>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projeto</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Causa Raiz Primária</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metodologia de Reformulação</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 text-sm">
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">VLT Cuiabá</td><td class="px-6 py-4">Planejamento Deficiente e Corrupção</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Desenvolvimento em Fases (Phased Development)</td></tr>
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">Plataforma P-36</td><td class="px-6 py-4">Falha de Procedimento e Efeito Cascata</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Alta Confiabilidade (HRO) e Resiliência</td></tr>
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">SIVAM</td><td class="px-6 py-4">Gerenciamento de Contratos e Aquisições</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Arquitetura de Sistemas Abertos (OSA) e Modulares</td></tr>
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">Cartão Fome Zero</td><td class="px-6 py-4">Desconexão com a Realidade do Usuário (Digital Divide)</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Design Centrado no Usuário (UCD) e Piloto</td></tr>
                                <tr class="hover:bg-blue-50 transition duration-150"><td class="px-6 py-4 font-medium text-[#005f73]">Conecta SUS</td><td class="px-6 py-4">Falta de Interoperabilidade e Governança Fragmentada</td><td class="px-6 py-4 font-semibold text-[#0a9396]">Padrões Abertos Obrigatórios (FHIR)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg shadow-inner">
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Conclusão: Foco em Governança Sócio-Técnica</h3>
                <p class="text-sm text-gray-600">Nos casos brasileiros, o desafio reside em conciliar a excelência técnica com o ambiente político, social e de infraestrutura. A solução exige uma abordagem <strong>Sócio-Técnica</strong>, onde o projeto de engenharia deve incorporar a gestão de risco político e a infraestrutura social como requisitos não-funcionais críticos.</p>
            </div>
        `
    },
    "vlt-cuiaba": {
        title: "Caso 1: VLT de Cuiabá",
        intro: "O VLT de Cuiabá-Várzea Grande foi um projeto de mobilidade urbana para a Copa do Mundo de 2014, mas tornou-se um exemplo de obras inacabadas.",
        isCaseStudy: true,
        sections: [
            { title: "Análise da Falha", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Planejamento Deficiente:</strong> Alteração de BRT para VLT sem estudos de viabilidade.</li><li><strong>Gestão de Riscos Inexistente:</strong> Riscos como desapropriações foram subestimados.</li><li><strong>Questões Políticas e Corrupção:</strong> Paralisaram o fluxo de verbas e o progresso.</li></ul>` },
            { title: "Solução Proposta", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Desenvolvimento em Fases (Phased Development):</strong> Dividir o projeto em trechos menores e funcionais para gerar valor incremental.</li><li><strong>Governança Transparente:</strong> Criação de um comitê de supervisão para auditoria em tempo real.</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p><strong>PMBOK</strong> e <strong>Desenvolvimento Ágil</strong> (entrega incremental) seriam cruciais. A <strong>Teoria da Agência</strong> exige mecanismos de governança transparente para alinhar interesses e mitigar a corrupção.</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Fontes Jornalísticas:** Pesquisar sobre o histórico de mudanças de modal (BRT para VLT) e judicialização do projeto.</li>
                        <li>**Referência Teórica:** Teoria da Agência e a necessidade de governança transparente em grandes projetos públicos.</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'chart', id: 'vltChart', config: { type: 'bar', data: { labels: ['Cronograma'], datasets: [{ label: 'Planejado (Anos)', data: [3], backgroundColor: 'rgba(10, 147, 150, 0.7)' }, { label: 'Realidade (Anos até hoje, paralisado)', data: [11], backgroundColor: 'rgba(238, 108, 77, 0.7)' }] }, options: { indexAxis: 'y', maintainAspectRatio: false, responsive: true, plugins: { title: { display: true, text: 'VLT Cuiabá: Cronograma Planejado vs. Realidade (2014-2025)' }, legend: { position: 'bottom' } }, scales: { x: { beginAtZero: true, title: { display: true, text: 'Anos' } } } } } }
    },
    "p36": {
        title: "Caso 2: Plataforma P-36",
        intro: "A maior plataforma do mundo (2001) naufragou após explosões. Falha de sistemas em cascata e procedimentos operacionais.",
        isCaseStudy: true,
        sections: [
            { title: "Análise da Falha", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Falha de Procedimento Operacional:</strong> Operação incorreta causa sobrepressão no tanque.</li><li><strong>Falha em Sistemas de Segurança (Cascata):</strong> Sistemas de contenção não funcionaram como esperado após a primeira explosão.</li><li><strong>Fator Humano:</strong> Falha na comunicação e na tomada de decisão sob estresse.</li></ul>` },
            { title: "Solução Proposta: Alta Confiabilidade (HRO) e Engenharia de Resiliência", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Redundância em Processos:</strong> Exigir "dupla checagem" por outro técnico em procedimentos críticos.</li><li><strong>Simulações Avançadas:</strong> Realizar simulações de desastres realistas e não anunciadas.</li><li><strong>Manutenção Preditiva:</strong> Usar sensores/IA para prever falhas de componentes.</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p><strong>Teoria do Queijo Suíço (James Reason):</strong> A falha ocorreu porque os "buracos" em várias barreiras de segurança se alinharam. A solução HRO foca em reduzir o tamanho desses buracos. A <strong>Engenharia de Resiliência</strong> projeta sistemas para se adaptar e se recuperar de eventos inesperados.</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Relatórios:** Pesquisar sobre o relatório final da investigação do naufrágio da P-36 (Março de 2001).</li>
                        <li>**Referência Teórica:** Conceitos de Alta Confiabilidade (HRO) e Análise dos Modos de Falha e seus Efeitos (FMEA) em indústrias de alto risco.</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'diagram', content: `<h3 class="text-lg font-semibold text-center mb-4">Efeito Cascata da Falha na P-36</h3><div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 text-center"><div class="p-4 bg-gray-100 rounded-lg shadow w-full md:w-1/4"><p class="font-bold">1. Falha de Procedimento</p><p class="text-sm">Sobrepressão.</p></div><div class="text-2xl font-bold text-red-500 transform rotate-90 md:rotate-0">→</div><div class="p-4 bg-gray-100 rounded-lg shadow w-full md:w-1/4"><p class="font-bold">2. Falha Técnica</p><p class="text-sm">Tanque se rompe.</p></div><div class="text-2xl font-bold text-red-500 transform rotate-90 md:rotate-0">→</div><div class="p-4 bg-red-100 border border-red-500 rounded-lg shadow w-full md:w-1/4"><p class="font-bold">3. Falha de Sistemas</p><p class="text-sm">Naufrágio.</p></div></div>` }
    },
    "sivam": {
        title: "Caso 3: SIVAM",
        intro: "Sistema de Vigilância da Amazônia, projeto ambicioso marcado por atrasos, custos exorbitantes e escândalos políticos.",
        isCaseStudy: true,
        sections: [
            { title: "Análise da Falha", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Gerenciamento de Contratos:</strong> Licitação conturbada e dependência de um único fornecedor (Raytheon).</li><li><strong>Complexidade de Integração:</strong> Integrar dezenas de sistemas diferentes (radares, satélites) subestimada.</li><li><strong>Orçamento Subestimado e Descontrole de Custos:</strong> Custo inicial saltou de US$ 1,1 bi para US$ 1,4 bi.</li></ul>` },
            { title: "Solução Proposta: Contratos Modulares e Arquitetura Aberta", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Contratos Modulares:</strong> Dividir o projeto em módulos menores (ex: radares, software) para aumentar a competição e fiscalização.</li><li><strong>Arquitetura de Sistemas Abertos (OSA):</strong> Exigir padrões de comunicação e dados abertos para evitar o "aprisionamento tecnológico" (*vendor lock-in*).</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p>O <strong>INCOSE Systems Engineering Handbook</strong> preconiza a decomposição de sistemas complexos. A <strong>Teoria dos Custos de Transação</strong> mostra que contratos gigantescos têm custos de fiscalização mais altos. A <strong>Lei de Conway</strong> exige que a estrutura de comunicação interna reflita a estrutura do sistema.</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Notícias Históricas:** Pesquisar sobre o escândalo da SIVAM/SIVAMGATE (anos 90) e a escolha do fornecedor (Raytheon).</li>
                        <li>**Referência Teórica:** Teoria dos Custos de Transação e o risco de contratos monolíticos.</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'chart', id: 'sivamChart', config: { type: 'bar', data: { labels: ['Orçamento (US$)', 'Prazo (Anos)'], datasets: [{ label: 'Planejado', data: [1.1e9, 5], backgroundColor: 'rgba(10, 147, 150, 0.7)', }, { label: 'Realizado', data: [1.4e9, 9], backgroundColor: 'rgba(238, 108, 77, 0.7)', }] }, options: { maintainAspectRatio: false, responsive: true, plugins: { title: { display: true, text: 'SIVAM: Custo e Prazo - Planejado vs. Realizado' }, legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true } } } } }
    },
    "fome-zero": {
        title: "Caso 4: Cartão Fome Zero",
        intro: "Primeira aposta tecnológica do programa (2003). Fracassou na implementação devido à falta de infraestrutura e realidade do usuário.",
        isCaseStudy: true,
        sections: [
            { title: "Análise da Falha", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Desconexão com a Realidade do Usuário (Digital Divide)</strong></li><li><strong>Falha de Infraestrutura</strong></li><li><strong>Modelo de Negócio Inviável</strong></li></ul>` },
            { title: "Solução Proposta: Design Centrado no Usuário (UCD) e Piloto", content: `<ul class="list-disc list-inside space-y-2"><li><strong>UCD e Pesquisa Etnográfica:</strong> Fazer imersão nas comunidades antes de projetar.</li><li><strong>Projeto Piloto Iterativo:</strong> Lançar em pequena escala para validar a compatibilidade.</li><li><strong>Subsídio de Infraestrutura:</strong> Governo subsidiar máquinas ou criar sistema de pagamento alternativo.</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p>O fracasso é clássico de não seguir os princípios do <strong>User-Centered Design (UCD)</strong>. A <strong>Teoria da Difusão de Inovações</strong> explica que a solução falhou nos atributos de "Compatibilidade" e "Complexidade".</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Notícias Históricas:** Cobertura de 2003/2004 sobre a dificuldade de uso e a falta de infraestrutura de máquinas POS nas cidades alvo.</li>
                        <li>**Referência Teórica:** Princípios de Design Centrado no Usuário (UCD) e Teoria da Difusão de Inovações (falha de compatibilidade).</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'diagram', content: `<h3 class="text-lg font-semibold text-center mb-4">Fluxo do Sistema: Ideal vs. Realidade</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="p-4 bg-green-50 border border-green-200 rounded-lg"><h4 class="font-bold text-center text-green-800">Fluxo Idealizado</h4><div class="flex flex-col items-center space-y-2 mt-2 text-sm"><div class="p-2 bg-white rounded shadow w-full">Governo carrega</div><div class="font-bold">↓</div><div class="p-2 bg-white rounded shadow w-full">Comerciante recebe</div></div></div><div class="p-4 bg-red-50 border border-red-200 rounded-lg"><h4 class="font-bold text-center text-red-800">Fluxo na Realidade</h4><div class="flex flex-col items-center space-y-2 mt-2 text-sm"><div class="p-2 bg-white rounded shadow w-full">Governo carrega</div><div class="font-bold text-red-500">X</div><div class="p-2 bg-red-100 rounded shadow w-full">Beneficiário não tem CPF/Comércio não tem POS</div></div></div></div>` }
    },
    "conectasus": {
        title: "Caso 5: Conecta SUS (Pré-Pandemia)",
        intro: "Concebido para ser a plataforma nacional de dados de saúde. Patinou por anos, falhando em criar um prontuário eletrônico unificado.",
        isCaseStudy: true,
        sections: [
            { title: "Análise da Falha", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Falta de Interoperabilidade</strong></li><li><strong>Governança Fragmentada</strong></li><li><strong>Resistência à Mudança</strong></li></ul>` },
            { title: "Solução Proposta: Padrões Abertos Obrigatórios e Incentivos", content: `<ul class="list-disc list-inside space-y-2"><li><strong>Padrões Abertos (FHIR):</strong> Impor um padrão nacional de dados (API).</li><li><strong>Marketplace de Soluções:</strong> Credenciar sistemas privados compatíveis.</li></ul>` },
            { title: "Fundamentação Científica: Comprovação", content: `<p>A abordagem de <strong>Arquitetura Orientada a Serviços (SOA) / Microsserviços</strong> (API padrão) é a ideal. O padrão <strong>HL7/FHIR</strong> é globalmente comprovado. A <strong>Teoria da Ação Racional</strong> mostra que incentivos financeiros alinham o objetivo nacional com a ação municipal.</p>` },
            {
                title: "Referências e Fontes de Notícias",
                content: `
                    <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>**Notícias:** Pesquisar sobre a dificuldade de integração de sistemas municipais de saúde (pré-2020) e a falta de padronização.</li>
                        <li>**Referência Teórica:** Padrões de Interoperabilidade em Saúde (HL7/FHIR) e o conceito de Arquitetura Distribuída e Federada.</li>
                    </ul>
                `
            }
        ],
        visualization: { type: 'diagram', content: `<h3 class="text-lg font-semibold text-center mb-4">Fragmentação do Ecossistema de Saúde</h3><div class="p-4 bg-gray-100 rounded-lg shadow-inner"><p class="text-center text-sm mb-4">O desafio era unificar dados de sistemas totalmente diferentes e sem um padrão de comunicação.</p><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-xs"><div class="p-2 bg-blue-100 rounded">Hospitais Federais</div><div class="p-2 bg-green-100 rounded">Secretarias Estaduais</div><div class="p-2 bg-yellow-100 rounded">Secretarias Municipais</div><div class="p-2 bg-purple-100 rounded">Hospitais Privados</div></div></div>` }
    }
};

// =================================================================
// LÓGICA DO SPA E FUNÇÕES DE RENDERIZAÇÃO
// =================================================================

let currentChart = null;
let activeAnalysisType = 'global'; // 'global' or 'brazil'

function createAccordion(section, index) {
    const isOpen = index === 0 ? 'open' : ''; 
    return `
        <div class="border-b border-gray-200">
            <h2>
                <button type="button" class="accordion-header flex justify-between items-center w-full p-4 font-semibold text-left text-gray-700 hover:bg-gray-100 ${isOpen}">
                    <span>${section.title}</span>
                    <span class="icon transform transition-transform duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                </button>
            </h2>
            <div class="accordion-content bg-white">
                <div class="p-5">${section.content}</div>
            </div>
        </div>
    `;
}

function renderAnalysisDashboard(analysisType) {
    const projects = analysisType === 'global' ? globalProjectsData : brazilProjectsData;
    activeAnalysisType = analysisType;
    const analysisContent = document.getElementById('analysis-content');
    const analysisNav = document.getElementById('analysis-nav-container');

    // 1. Renderizar Abas de Navegação Secundária
    const projectIds = Object.keys(projects);
    analysisNav.innerHTML = projectIds.map(id => {
        const title = projects[id].title.split(':').pop().trim();
        return `
            <button data-project-id="${id}" data-analysis-type="${analysisType}" class="nav-button-secondary py-3 px-4 text-sm md:text-base hover:bg-gray-100 ${id === 'overview' ? 'active' : ''}">
                ${title.includes('Dashboard') ? 'Visão Geral' : title}
            </button>
        `;
    }).join('');

    // 2. Renderizar Conteúdo Inicial (Overview)
    displayProject(projectIds[0], analysisType);

    // 3. Adicionar Listeners Secundários
    analysisNav.querySelectorAll('.nav-button-secondary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.currentTarget.dataset.projectId;
            const type = e.currentTarget.dataset.analysisType;
            displayProject(projectId, type);
            setActiveSecondaryButton(projectId);
        });
    });

    function setActiveSecondaryButton(projectId) {
        analysisNav.querySelectorAll('.nav-button-secondary').forEach(btn => {
            if (btn.dataset.projectId === projectId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

function displayProject(projectId, analysisType) {
    const projects = analysisType === 'global' ? globalProjectsData : brazilProjectsData;
    const project = projects[projectId];
    const analysisContent = document.getElementById('analysis-content');

    if (!project) return;

    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }

    if (projectId === 'overview') {
        analysisContent.innerHTML = `
            <section id="overview" class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-3xl font-bold text-[#005f73]">${project.title}</h2>
                <p class="mt-2 text-gray-600 mb-6">${project.intro}</p>
                ${project.content(analysisType)}
            </section>
        `;
        // Inicializa o gráfico do Dashboard
        setTimeout(() => {
            const chartId = `domainChart-${analysisType}`;
            let domainData;
            
            if (analysisType === 'global') {
                domainData = {
                    labels: ['Gerencial/Governança (40%)', 'Técnico/Viabilidade (40%)', 'Organizacional/Humano (20%)'],
                    datasets: [{
                        data: [4, 4, 2],
                        backgroundColor: [DOMAIN_COLORS[0], DOMAIN_COLORS[1], DOMAIN_COLORS[2]],
                        hoverOffset: 4
                    }]
                };
            } else { // Brazil
                domainData = {
                    labels: ['Político/Governança (40%)', 'Gerencial/Processos (30%)', 'Técnico/Infraestrutura (30%)'],
                    datasets: [{
                        data: [4, 3, 3],
                        backgroundColor: [DOMAIN_COLORS[4], DOMAIN_COLORS[0], DOMAIN_COLORS[3]],
                        hoverOffset: 4
                    }]
                };
            }

            const ctx = document.getElementById(chartId).getContext('2d');
            currentChart = new Chart(ctx, {
                type: 'doughnut',
                data: domainData,
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        title: { display: true, text: 'Distribuição das Causas Raiz por Domínio (N=10)' },
                        legend: { position: 'bottom' }
                    },
                    animation: { animateScale: true }
                }
            });
        }, 50); 
        return;
    }

    // Lógica para Estudos de Caso
    let visualizationHtml = '';
    if (project.visualization) {
        if (project.visualization.type === 'chart') {
            visualizationHtml = `<div class="chart-container mt-6 mb-8"><canvas id="${project.visualization.id}"></canvas></div>`;
        } else if (project.visualization.type === 'diagram') {
            visualizationHtml = `<div class="mt-6 mb-8">${project.visualization.content}</div>`;
        }
    }
    
    analysisContent.innerHTML = `
        <section id="${projectId}" class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold text-[#005f73]">${project.title}</h2>
            <p class="mt-2 text-gray-600">${project.intro}</p>
            ${visualizationHtml}
            <div class="mt-8 border border-gray-200 rounded-lg" id="accordion-container-${projectId}">
                ${project.sections.map((section, index) => createAccordion(section, index)).join('')}
            </div>
        </section>
    `;

    // Lógica do Chart.js
    if (project.visualization && project.visualization.type === 'chart') {
        const ctx = document.getElementById(project.visualization.id).getContext('2d');
        currentChart = new Chart(ctx, project.visualization.config);
    }

    // Lógica robusta do Acordeão com JS
    const accordionContainer = document.getElementById(`accordion-container-${projectId}`);
    if (accordionContainer) {
        const headers = accordionContainer.querySelectorAll('.accordion-header');

        function toggleAccordion(header, content) {
            const isOpen = header.classList.contains('open');
            if (isOpen) {
                header.classList.remove('open');
                header.querySelector('.icon').classList.remove('open');
                content.style.maxHeight = '0';
            } else {
                // Fecha todos os outros do mesmo grupo
                headers.forEach(h => {
                    if (h !== header && h.classList.contains('open')) {
                        h.classList.remove('open');
                        h.querySelector('.icon').classList.remove('open');
                        h.parentElement.nextElementSibling.style.maxHeight = '0';
                    }
                });
                // Abre o clicado
                header.classList.add('open');
                header.querySelector('.icon').classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }

        headers.forEach(header => {
            const content = header.parentElement.nextElementSibling;
            if (header.classList.contains('open')) {
                 header.querySelector('.icon').classList.add('open');
                 requestAnimationFrame(() => {
                    content.style.maxHeight = content.scrollHeight + 'px';
                 });
            }
            header.addEventListener('click', () => {
                toggleAccordion(header, content);
            });
        });
    }
}

function renderHomePage() {
    const dynamicContent = document.getElementById('dynamic-page-content');
    dynamicContent.innerHTML = `
        <section id="page-home">
            <div class="bg-white p-6 md:p-12 rounded-xl shadow-2xl text-center mb-10 border-t-4 border-t-[#005f73]">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#005f73] mb-4">
                    Lições de Engenharia: A Análise de Grandes Falhas de Projetos
                </h2>
                <p class="text-md sm:text-lg text-gray-700 max-w-4xl mx-auto">
                    Este repositório interativo apresenta estudos de caso detalhados de grandes projetos de engenharia e computação que falharam. Explore as causas raiz, as soluções propostas e as provas científicas que fundamentam a reformulação para transformar erros em aprendizado estruturado.
                </p>
            </div>

            <h3 class="text-2xl font-bold text-gray-700 mb-6 border-b pb-3">
                Destaques: Últimas Análises e Painéis
            </h3>
            
            <div id="highlights-container" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <div class="highlight-card bg-white p-6 rounded-lg shadow-md cursor-pointer" onclick="navigate('global-analysis')" data-page-id="global-analysis">
                    <h4 class="text-2xl font-bold text-[#005f73] mb-3">Falhas de Projetos Globais</h4>
                    <p class="text-gray-600 mb-4">Estudo de casos internacionais icônicos, como <strong>Apple Lisa, Lidl SAP Debacle e IBM Watson Oncology</strong>, focando em falhas de mercado, governança corporativa e viés de dados em sistemas de IA.</p>
                    <span class="text-md font-semibold text-[#0a9396] hover:underline flex items-center">
                        Ver Dashboard Global 
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                </div>

                <div class="highlight-card bg-white p-6 rounded-lg shadow-md cursor-pointer" onclick="navigate('brazil-analysis')" data-page-id="brazil-analysis">
                    <h4 class="text-2xl font-bold text-[#005f73] mb-3">Falhas de Projetos Brasileiros</h4>
                    <p class="text-gray-600 mb-4">Foco em casos nacionais de grande infraestrutura e governo, como <strong>VLT Cuiabá, Plataforma P-36 e SIVAM</strong>, destacando a complexidade da infraestrutura, falhas de planejamento e os riscos do ambiente político.</p>
                    <span class="text-md font-semibold text-[#0a9396] hover:underline flex items-center">
                        Ver Dashboard Brasil
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                </div>
            </div>
        </section>
    `;
}

function renderAnalysisPage(analysisType) {
    const dynamicContent = document.getElementById('dynamic-page-content');
    dynamicContent.innerHTML = `
        <section id="page-${analysisType}">
            <nav class="bg-white shadow-md rounded-lg p-2 mb-6 border-b border-gray-200">
                <div id="analysis-nav-container" class="container mx-auto flex overflow-x-auto justify-start md:justify-center items-center">
                    </div>
            </nav>
            <div id="analysis-content" class="min-h-[500px]">
                </div>
        </section>
    `;
    renderAnalysisDashboard(analysisType);
}

// =================================================================
// ROTEADOR (ROUTER) E NAVEGAÇÃO
// =================================================================

function navigate(pageId) {
    // Destrói o gráfico anterior para evitar lixo
    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }
    
    if (pageId === 'home') {
        renderHomePage();
    } else if (pageId === 'global-analysis') {
        renderAnalysisPage('global');
    } else if (pageId === 'brazil-analysis') {
        renderAnalysisPage('brazil');
    } else if (pageId === 'wii-u-failure') {
        renderCaseStudyPage('wii-u-failure', 'global');
    }
    setActivePrimaryButton(pageId);
    // Fecha o menu mobile após a navegação
    document.getElementById('mobile-menu').classList.remove('open');
}

function setActivePrimaryButton(pageId) {
    document.querySelectorAll('.nav-button-primary, .page-link').forEach(btn => {
        if (btn.dataset.pageId === pageId) {
            btn.classList.add('active-nav');
        } else {
            btn.classList.remove('active-nav');
        }
    });
}

function init() {
    // Inicializar o SPA na página inicial
    navigate('home');

    // Listener do Menu Hambúrguer
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('open');
    });

    // Listeners do Menu Principal (Desktop)
    document.querySelectorAll('.nav-button-primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            navigate(e.currentTarget.dataset.pageId);
        });
    });

    // Listeners do Menu Principal (Mobile)
    document.getElementById('mobile-menu').addEventListener('click', (e) => {
        const target = e.target.closest('.page-link');
        if (target) {
            navigate(target.dataset.pageId);
        }
    });
    
    // Listener para Cards de Destaque na Home Page (implementado no HTML dos cards)
    document.getElementById('dynamic-page-content').addEventListener('click', (e) => {
        const target = e.target.closest('.highlight-card');
        if(target && target.dataset.pageId) {
            navigate(target.dataset.pageId);
        }
    });
    
}

// Adicione uma nova função auxiliar para renderizar o estudo de caso individual fora do menu principal (se desejado como página única), ou use a função displayProject diretamente:
function renderCaseStudyPage(projectId, analysisType) {
    const dynamicContent = document.getElementById('dynamic-page-content');
    dynamicContent.innerHTML = `
        <section id="page-${projectId}" class="p-6 rounded-lg shadow-lg">
            <nav class="mb-4">
                <button onclick="navigate('global-analysis')" class="text-[#0a9396] hover:underline font-semibold flex items-center">
                    &larr; Voltar para Dashboard Global
                </button>
            </nav>
            <div id="case-study-content"></div>
        </section>
    `;
    // Simula a função displayProject para renderizar o conteúdo do caso
    const projects = analysisType === 'global' ? globalProjectsData : brazilProjectsData;
    const project = projects[projectId];

    if (!project) return;
    

    if (pageId === 'wii-u-failure') {
        // Redirecionar para a página de análise global e carregar o projeto
        renderAnalysisPage('global');
        // Usar setTimeout para garantir que o DOM esteja pronto e os listeners do overview carregados
        setTimeout(() => {
            displayProject('wii-u-failure', 'global');
            // Definir o botão secundário ativo (caso exista)
            const analysisNav = document.getElementById('analysis-nav-container');
            analysisNav.querySelectorAll('.nav-button-secondary').forEach(btn => {
                if (btn.dataset.projectId === 'wii-u-failure') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }, 100);
        return;
    }
}

document.addEventListener('DOMContentLoaded', init);