// ===== SISTEMA DA DRA. ELARA VANCE =====
// Arquivo: NV-19-ZETA
// Status: Inativa / Setor de Recalibração Cognitiva

class SistemaElaraVance {
    constructor() {
        this.modulosAtivos = new Set();
        this.historicoDialogo = [];
        this.contador93Ativo = false;
        this.tempoRestante = 93;
        this.respostasVance = this.inicializarRespostas();
        
        this.elementos = {
            protocolo: document.getElementById('protocolo'),
            interface: document.getElementById('interface'),
            botoesNeuro: document.querySelectorAll('.botao-neuro'),
            modulos: document.querySelectorAll('.modulo-cientifico'),
            entradaQuestao: document.getElementById('entrada-questao'),
            botaoEnviar: document.getElementById('botao-enviar'),
            areaMensagens: document.getElementById('area-mensagens'),
            botoesQuestao: document.querySelectorAll('.botao-questao'),
            botoesRevelar: document.querySelectorAll('.botao-revelar'),
            conteudosRevelados: document.querySelectorAll('.conteudo-revelado'),
            opcoesEticas: document.querySelectorAll('.opcao-etica'),
            resultadoEtica: document.getElementById('resultado-etica'),
            botaoVazio: document.getElementById('botao-vazio'),
            contador93: document.getElementById('contador-93'),
            botaoContador: document.getElementById('iniciar-contador'),
            barrasPreenchimento: document.querySelectorAll('.preenchimento'),
            valoresMetricas: {
                vulnerabilidade: document.getElementById('valor-vulnerabilidade'),
                rigidez: document.getElementById('valor-rigidez'),
                falha: document.getElementById('valor-falha')
            }
        };
        
        this.iniciarSistema();
    }
    
    inicializarRespostas() {
        return {
            'amor': [
                "O amor não é uma anomalia. É a anomalia definitiva. Uma cascata bioquímica que desativa os centros de autocontrole.",
                "Sim, é uma anomalia. Mas não no sentido patológico. No sentido de que desafia todas as nossas tentativas de racionalização.",
                "Chamamos de anomalia porque não conseguimos medi-lo sem alterá-lo. O ato de observação contamina a experiência."
            ],
            'perfil': [
                "Apaguei meu perfil porque os dados estavam contaminados. Minhas próprias métricas estavam falhando.",
                "Foi um ato de integridade científica. Se não posso confiar nos meus próprios dados, como posso confiar nos dos outros?",
                "Criei um vazio deliberado. Às vezes, a ausência de dados é mais informativa que sua presença."
            ],
            '93segundos': [
                "Nos 93 segundos... Nada. Absolutamente nada. E nesse nada, paradoxalmente, tudo.",
                "É o tempo exato do efeito do AI-17. Uma ironia deliberada. Meu pequeno experimento pessoal.",
                "Sinto o silêncio dos implantes desativados. É como ouvir o eco de uma ausência."
            ],
            'ciencia': [
                "A ciência pode ser compassiva? Pergunta errada. A ciência deve ser precisa. A compaixão é um subproduto.",
                "A frieza era minha forma de compaixão. Evitar o sofrimento através da prevenção da vulnerabilidade.",
                "A ciência mais compassiva é aquela que reconhece seus próprios limites. Estou aprendendo isso."
            ],
            'erro': [
                "O maior erro foi a certeza. A certeza de que estávamos certos, de que o controle era a cura.",
                "Talvez o erro não seja o amor, mas a certeza de que ele deve ser corrigido.",
                "Errei ao confundir proteção com supressão. São coisas diferentes, mas pareciam iguais no laboratório."
            ],
            'recalibracao': [
                "A recalibração não é um castigo. É um reconhecimento. Reconhecimento de que algo em mim precisa ser reajustado.",
                "Estou no Setor de Recalibração porque escolhi estar aqui. Autossabotagem como forma última de controle.",
                "Recalibrar significa admitir que a calibração anterior estava errada. É humilhante. E necessário."
            ],
            'geral': [
                "O amor é uma cascata de falhas. É o único estado em que o cérebro abre mão do controle.",
                "Felicidade é um parâmetro instável. Não usamos mais esse termo.",
                "Vulnerabilidade é brecha. Brecha é risco. Risco é caos.",
                "Se a cura exige que apaguemos o que nos faz humanos... então não estamos curando. Estamos apagando."
            ]
        };
    }
    
    iniciarSistema() {
        this.iniciarProtocolo();
        this.configurarNavegacao();
        this.configurarDialogo();
        this.configurarInterativos();
        this.configurarMetricas();
        
        window.sistemaElaraCarregado = true;
    }
    
    iniciarProtocolo() {
        const linhas = document.querySelectorAll('.linha-codigo');
        
        linhas.forEach((linha, index) => {
            const delay = parseInt(linha.getAttribute('data-delay'));
            
            setTimeout(() => {
                linha.style.animation = 'linhaEntrar 0.5s ease forwards';
                
                // Animar digitação do código
                const codigo = linha.querySelector('.codigo');
                const textoOriginal = codigo.textContent;
                codigo.textContent = '';
                codigo.style.width = '0';
                
                this.animarDigitacaoProtocolo(codigo, textoOriginal, () => {
                    if (index === linhas.length - 1) {
                        setTimeout(() => {
                            this.transicionarParaInterface();
                        }, 2000);
                    }
                });
            }, delay);
        });
    }
    
    animarDigitacaoProtocolo(elemento, texto, callback) {
        let i = 0;
        const velocidade = 30;
        
        const digitar = () => {
            if (i < texto.length) {
                elemento.textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, velocidade + Math.random() * 20);
            } else if (callback) {
                setTimeout(callback, 500);
            }
        };
        
        setTimeout(digitar, 100);
    }
    
    transicionarParaInterface() {
        // Efeito de fade do protocolo
        this.elementos.protocolo.style.opacity = '0';
        this.elementos.protocolo.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            this.elementos.protocolo.style.display = 'none';
            this.elementos.interface.style.display = 'block';
            
            setTimeout(() => {
                this.elementos.interface.style.opacity = '1';
                this.iniciarAnimacoesInterface();
            }, 100);
        }, 1000);
    }
    
    iniciarAnimacoesInterface() {
        // Animar métricas
        this.animarMetricas();
        
        // Mensagem inicial
        setTimeout(() => {
            this.adicionarMensagem('sistema', 'Sistema Neuroético conectado. Diálogo estabelecido através de registros residuais.');
            
            setTimeout(() => {
                this.adicionarMensagem('vance', 'Você acessou meus dados. Não espere arrependimento. Espere... dados incompletos.', true);
            }, 1000);
        }, 500);
    }
    
    animarMetricas() {
        this.elementos.barrasPreenchimento.forEach(barra => {
            const alvo = parseFloat(barra.getAttribute('data-alvo'));
            barra.style.width = '0%';
            
            setTimeout(() => {
                barra.style.transition = 'width 2.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
                barra.style.width = alvo + '%';
                
                // Animar valores numéricos
                this.animarValorMetrica(alvo, barra.parentElement.parentElement.querySelector('.valor'));
            }, 300);
        });
    }
    
    animarValorMetrica(alvo, elemento) {
        let valorAtual = 0;
        const incremento = alvo / 50;
        const intervalo = setInterval(() => {
            valorAtual += incremento;
            if (valorAtual >= alvo) {
                valorAtual = alvo;
                clearInterval(intervalo);
            }
            elemento.textContent = valorAtual.toFixed(1) + '%';
        }, 50);
    }
    
    configurarNavegacao() {
        this.elementos.botoesNeuro.forEach(botao => {
            botao.addEventListener('click', () => {
                const moduloId = botao.getAttribute('data-modulo');
                this.mudarModulo(moduloId);
            });
        });
    }
    
    mudarModulo(moduloId) {
        // Atualizar botões
        this.elementos.botoesNeuro.forEach(b => b.classList.remove('ativo'));
        document.querySelector(`[data-modulo="${moduloId}"]`).classList.add('ativo');
        
        // Atualizar conteúdo
        this.elementos.modulos.forEach(m => m.classList.remove('ativo'));
        document.getElementById(`modulo-${moduloId}`).classList.add('ativo');
        
        // Registrar acesso
        this.modulosAtivos.add(moduloId);
        
        // Efeitos específicos
        switch(moduloId) {
            case 'ruptura':
                this.atualizarMetrica('falha', 78.2);
                break;
            case 'recalibracao':
                this.adicionarMensagem('vance', '93 segundos de nada. Meu único intervalo de vulnerabilidade permitida.');
                break;
            case 'simbolismo':
                this.adicionarMensagem('vance', 'A xícara de Reykjavik... Às vezes, os objetos contam mais que os dados.');
                break;
        }
    }
    
    atualizarMetrica(metrica, valor) {
        if (this.elementos.valoresMetricas[metrica]) {
            this.elementos.valoresMetricas[metrica].textContent = valor.toFixed(1) + '%';
            
            // Atualizar barra correspondente
            const barra = document.querySelector(`#valor-${metrica}`).closest('.metrica-cientifica').querySelector('.preenchimento');
            if (barra) {
                barra.style.width = valor + '%';
                barra.setAttribute('data-alvo', valor);
            }
        }
    }
    
    configurarDialogo() {
        // Enter para enviar (com Ctrl para nova linha)
        this.elementos.entradaQuestao.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.ctrlKey) {
                e.preventDefault();
                this.enviarQuestao();
            }
        });
        
        // Botão enviar
        this.elementos.botaoEnviar.addEventListener('click', () => this.enviarQuestao());
        
        // Sugestões
        this.elementos.botoesQuestao.forEach(botao => {
            botao.addEventListener('click', () => {
                const questao = botao.getAttribute('data-questao');
                this.elementos.entradaQuestao.value = questao;
                this.enviarQuestao();
            });
        });
    }
    
    enviarQuestao() {
        const questao = this.elementos.entradaQuestao.value.trim();
        if (!questao) return;
        
        // Adicionar questão
        this.adicionarMensagem('usuario', questao);
        this.elementos.entradaQuestao.value = '';
        
        // Processar resposta
        setTimeout(() => {
            const resposta = this.processarQuestao(questao);
            this.adicionarMensagem('vance', resposta, true);
        }, 1200);
    }
    
    processarQuestao(texto) {
        const textoLower = texto.toLowerCase();
        let categoria = 'geral';
        
        // Mapear categorias
        if (textoLower.includes('amor') || textoLower.includes('anomalia')) {
            categoria = 'amor';
        } else if (textoLower.includes('perfil') || textoLower.includes('apagar') || textoLower.includes('vazio')) {
            categoria = 'perfil';
        } else if (textoLower.includes('93') || textoLower.includes('segundo') || textoLower.includes('intervalo')) {
            categoria = '93segundos';
        } else if (textoLower.includes('ciência') || textoLower.includes('compassivo') || textoLower.includes('frieza')) {
            categoria = 'ciencia';
        } else if (textoLower.includes('erro') || textoLower.includes('errei') || textoLower.includes('certeza')) {
            categoria = 'erro';
        } else if (textoLower.includes('recalibração') || textoLower.includes('recalibrar')) {
            categoria = 'recalibracao';
        }
        
        // Selecionar resposta
        const respostas = this.respostasVance[categoria];
        return respostas[Math.floor(Math.random() * respostas.length)];
    }
    
    adicionarMensagem(remetente, texto, comDigitacao = false) {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.className = `mensagem ${remetente}`;
        
        const cabecalho = document.createElement('div');
        cabecalho.className = 'cabecalho-mensagem';
        cabecalho.textContent = remetente === 'vance' ? 'DRA. ELARA VANCE' : 
                                remetente === 'sistema' ? 'SISTEMA NEUROÉTICO' : 'PESQUISADOR';
        
        const corpo = document.createElement('div');
        corpo.className = 'corpo-mensagem';
        
        mensagemDiv.appendChild(cabecalho);
        mensagemDiv.appendChild(corpo);
        this.elementos.areaMensagens.appendChild(mensagemDiv);
        
        // Scroll
        this.elementos.areaMensagens.scrollTop = this.elementos.areaMensagens.scrollHeight;
        
        // Histórico
        this.historicoDialogo.push({
            remetente,
            texto,
            timestamp: new Date()
        });
        
        // Animação
        if (comDigitacao) {
            this.simularDigitacao(corpo, texto);
        } else {
            corpo.textContent = texto;
        }
        
        // Limitar histórico
        if (this.elementos.areaMensagens.children.length > 12) {
            this.elementos.areaMensagens.removeChild(this.elementos.areaMensagens.firstChild);
        }
    }
    
    simularDigitacao(elemento, texto) {
        elemento.classList.add('texto-digitando');
        let i = 0;
        
        const digitar = () => {
            if (i < texto.length) {
                elemento.textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, 40 + Math.random() * 60);
            } else {
                elemento.classList.remove('texto-digitando');
            }
        };
        
        elemento.textContent = '';
        setTimeout(digitar, 300);
    }
    
    configurarInterativos() {
        // Botões revelar
        this.elementos.botoesRevelar.forEach((botao, index) => {
            botao.addEventListener('click', () => {
                const conteudo = this.elementos.conteudosRevelados[index];
                conteudo.classList.toggle('ativo');
                
                if (index === 0) {
                    this.adicionarMensagem('vance', 'Meu protocolo de análise do amor... Os dados nunca mentem. Mas também nunca contam a história toda.');
                }
            });
        });
        
        // Simulador ético
        this.elementos.opcoesEticas.forEach(opcao => {
            opcao.addEventListener('click', () => {
                this.elementos.opcoesEticas.forEach(o => o.classList.remove('ativa'));
                opcao.classList.add('ativa');
                
                const escolha = opcao.getAttribute('data-opcao');
                this.elementos.resultadoEtica.textContent = 
                    escolha === 'aplicar' 
                    ? 'Elara aplicaria o AI-17. "A frieza como forma mais elevada de compaixão."' 
                    : 'Elara não escolheria preservar. Em sua lógica, preservar o afeto seria perpetuar a vulnerabilidade.';
                
                this.elementos.resultadoEtica.classList.add('ativo');
            });
        });
        
        // Botão do vazio
        if (this.elementos.botaoVazio) {
            this.elementos.botaoVazio.addEventListener('click', () => {
                this.iniciarContador93();
                this.adicionarMensagem('vance', 'Iniciando intervalo de 93 segundos. Implante desativado. Vulnerabilidade... permitida.');
            });
        }
        
        // Contador
        if (this.elementos.botaoContador) {
            this.elementos.botaoContador.addEventListener('click', () => {
                this.iniciarContador93();
            });
        }
    }
    
    iniciarContador93() {
        if (this.contador93Ativo) return;
        
        this.contador93Ativo = true;
        this.tempoRestante = 93;
        
        // Atualizar interface
        this.elementos.botaoContador.disabled = true;
        this.elementos.botaoContador.textContent = 'INTERVALO EM ANDAMENTO';
        this.elementos.botaoContador.style.opacity = '0.7';
        
        // Iniciar contagem
        const intervalo = setInterval(() => {
            this.tempoRestante--;
            
            // Atualizar display
            const minutos = Math.floor(this.tempoRestante / 60);
            const segundos = this.tempoRestante % 60;
            this.elementos.contador93.textContent = 
                `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
            
            // Efeito visual
            if (this.tempoRestante <= 10) {
                this.elementos.contador93.style.color = 'var(--cor-alerta)';
                this.elementos.contador93.classList.add('descalibrado');
            }
            
            // Finalizar
            if (this.tempoRestante <= 0) {
                clearInterval(intervalo);
                this.finalizarContador93();
            }
        }, 1000);
        
        // Guardar referência do intervalo
        this.intervaloContador = intervalo;
    }
    
    finalizarContador93() {
        this.contador93Ativo = false;
        
        // Restaurar interface
        this.elementos.botaoContador.disabled = false;
        this.elementos.botaoContador.textContent = 'INICIAR CONTAGEM DOS 93\'\'';
        this.elementos.botaoContador.style.opacity = '1';
        
        this.elementos.contador93.textContent = '01:33';
        this.elementos.contador93.style.color = 'var(--cor-azul-ciencia)';
        this.elementos.contador93.classList.remove('descalibrado');
        
        // Mensagem
        this.adicionarMensagem('sistema', 'Intervalo de 93 segundos concluído. Implante religado. Monitoramento retomado.');
        this.adicionarMensagem('vance', 'E então... volta o silêncio dos números. A segurança dos dados. A prisão da precisão.', true);
    }
    
    configurarMetricas() {
        // Configurar animações iniciais
        setTimeout(() => {
            this.animarMetricas();
        }, 1000);
    }
    
    // Métodos de sistema
    salvarEstado() {
        const estado = {
            modulos: Array.from(this.modulosAtivos),
            dialogo: this.historicoDialogo.slice(-5),
            tempo: this.tempoRestante,
            contadorAtivo: this.contador93Ativo,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('estadoElaraVance', JSON.stringify(estado));
    }
    
    carregarEstado() {
        const salvo = localStorage.getItem('estadoElaraVance');
        if (salvo) {
            const estado = JSON.parse(salvo);
            this.modulosAtivos = new Set(estado.modulos);
            this.historicoDialogo = estado.dialogo || [];
            this.tempoRestante = estado.tempo || 93;
            this.contador93Ativo = estado.contadorAtivo || false;
            
            // Restaurar visual se necessário
            if (this.contador93Ativo) {
                // Não restaurar contador ativo por segurança
                this.contador93Ativo = false;
                this.tempoRestante = 93;
            }
        }
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar sistema
    window.sistemaElara = new SistemaElaraVance();
    
    // Carregar estado salvo
    setTimeout(() => {
        if (window.sistemaElara) {
            window.sistemaElara.carregarEstado();
        }
    }, 2000);
    
    // Auto-salvamento
    setInterval(() => {
        if (window.sistemaElara) {
            window.sistemaElara.salvarEstado();
        }
    }, 30000);
    
    // Easter eggs
    console.log('%c🧠 ACESSO NEUROÉTICO NV-19-ZETA', 
        'color: #64b5f6; font-size: 14px; font-weight: bold;');
    console.log('%c⚖️ "Se a cura exige que apaguemos o que nos faz humanos..."', 
        'color: #a8b2d1; font-style: italic;');
    
    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
        // Alt+E para mensagem especial
        if (e.altKey && e.key === 'e') {
            if (window.sistemaElara) {
                window.sistemaElara.adicionarMensagem('vance', 
                    "Atalho detectado. Como meus protocolos: eficiente, previsível, e talvez... desnecessariamente complexo."
                );
            }
        }
        
        // Ctrl+Alt+9 para iniciar contador
        if (e.ctrlKey && e.altKey && e.key === '9') {
            if (window.sistemaElara && !window.sistemaElara.contador93Ativo) {
                window.sistemaElara.iniciarContador93();
            }
        }
    });
});

// Fallback para navegadores antigos
if (typeof SistemaElaraVance === 'undefined') {
    console.warn('Sistema ES6 não suportado. Fallback ativado.');
    
    document.addEventListener('DOMContentLoaded', function() {
        // Navegação básica
        const botoes = document.querySelectorAll('.botao-neuro');
        const modulos = document.querySelectorAll('.modulo-cientifico');
        
        botoes.forEach(botao => {
            botao.addEventListener('click', function() {
                const moduloId = this.getAttribute('data-modulo');
                
                botoes.forEach(b => b.classList.remove('ativo'));
                modulos.forEach(m => m.classList.remove('ativo'));
                
                this.classList.add('ativo');
                document.getElementById('modulo-' + moduloId).classList.add('ativo');
            });
        });
        
        // Pular protocolo após tempo
        setTimeout(function() {
            const protocolo = document.getElementById('protocolo');
            const interface = document.getElementById('interface');
            
            if (protocolo && interface) {
                protocolo.style.display = 'none';
                interface.style.display = 'block';
                interface.style.opacity = '1';
            }
        }, 5000);
    });
}
