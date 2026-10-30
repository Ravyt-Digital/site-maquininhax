# MaquininhaX

Site estático em Astro 7.4.4 e TypeScript para https://maquininhax.rvt.bio.

## Estrutura
- `/`: comparação InfinitePay Smart e Mercado Pago Point Smart 2.
- `/blog/`: índice e três artigos originais.
- Página 404, sitemap automático, robots, canonical, Open Graph e BlogPosting.
- Logotipo fornecido pela cliente, convertido para WebP. Original preservado em `brand/logo-original.png`.
- Paleta: #050505, #FFE500, #FF8300, branco.
- Sem cookies de análise, formulários ou rastreamento próprio.

## Desenvolvimento e validação
Node.js 24.

```sh
npm ci
npm run dev
npm run build
npm test
```

A build gera `dist/`. Os testes verificam as páginas geradas, links internos e fragmentos, links de afiliado exatos, divulgação, metadados, dados estruturados, imagens com alternativa e sitemap.

## GitHub + Cloudflare Workers Builds
Repositório: https://github.com/Ravyt-Digital/site-maquininhax

Configuração para conectar no Cloudflare Workers:

| Campo | Valor |
| --- | --- |
| Repositório | `Ravyt-Digital/site-maquininhax` |
| Branch de produção | `main` |
| Nome do Worker | `site-maquininhax` |
| Diretório raiz | `/` |
| Comando de build | `npm run build && npm test` |
| Comando de deploy | `npm run deploy` |
| Node.js | `24` |

O Wrangler serve os arquivos estáticos de `dist/`, com página 404 própria. Não usa Cloudflare Pages nem exige adaptador SSR. `wrangler.jsonc` não contém rotas ou domínio: a associação a `maquininhax.rvt.bio` deve ser feita após validar o deploy inicial. Nenhum token ou segredo deve ser versionado.

O envio ao GitHub não conecta automaticamente o repositório ao Cloudflare. A conexão e o build remoto devem ser confirmados no Cloudflare antes de afirmar que o site está publicado.

O usuário também solicitou ChatGPT Sites para gerenciamento/publicação. Ainda não há projeto Sites registrado para este código; esta etapa envia a base Astro ao GitHub para o build posterior no Workers conforme a instrução mais recente. O repositório externo é o destino autorizado do código; a integração nativa de versões Sites precisa de seu próprio registro e sincronização quando essa etapa for executada.

## Conteúdo e links
Características consultadas em 29/10/2026 nas fontes listadas no site. Sem teste físico de equipamentos. Taxas e preços não foram fixados para evitar extrapolar condições condicionais e temporárias. Exemplos de cálculo no blog são explicitamente fictícios. Revise dados sempre que fornecedores alterarem condições.

Links originais preservados literalmente:
- https://buy.infinitepay.io/smart?rid=marcawebsites
- https://mpago.li/2fmLeoR

O link Mercado Pago pode abrir ofertas de diferentes modelos; a comparação é da Point Smart 2 e isso está declarado ao visitante. Não foi simulado pedido nem confirmada atribuição de comissão.

Fontes:
- https://www.infinitepay.io/maquininha
- https://ajuda.infinitepay.io/pt-BR/articles/4844515-como-conectar-sua-maquininha-smart-a-internet
- https://www.mercadopago.com.br/ferramentas-para-vender/maquininhas-point/point-smart

## Estado da entrega
Código autorizado para envio ao repositório público acima. Build e testes locais são executados antes do envio. Publicação, build remoto, registro no ChatGPT Sites e domínio público não são comprovados por este README. Consulte o painel e os resultados de implantação para confirmar o estado atual.
