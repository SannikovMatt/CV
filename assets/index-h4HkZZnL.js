(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(e||{}),t=[0,1],n=[1,0],r=[2,3],i=[3,2],a={L:t,M:n,Q:r,H:i},o=/^\d*$/,s=/^[A-Z0-9 $%*+./:-]*$/,c=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,l=1,u=40,d=3,f=3,p=40,m=10,h=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],g=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],ee=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<l||e>u)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0,e.Timing),this.setFunctionModule(t,6,t%2==0,e.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let t=this.getAlignmentPatternPositions(),n=t.length;for(let e=0;e<n;e++)for(let r=0;r<n;r++)e===0&&r===0||e===0&&r===n-1||e===n-1&&r===0||this.drawAlignmentPattern(t[e],t[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,v(r,e));this.setFunctionModule(8,7,v(r,6)),this.setFunctionModule(8,8,v(r,7)),this.setFunctionModule(7,8,v(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,v(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,v(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,v(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=v(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(t,n){for(let r=-4;r<=4;r++)for(let i=-4;i<=4;i++){let a=Math.max(Math.abs(i),Math.abs(r)),o=t+i,s=n+r;o>=0&&o<this.size&&s>=0&&s<this.size&&this.setFunctionModule(o,s,a!==2&&a!==4,e.Position)}}drawAlignmentPattern(t,n){for(let r=-2;r<=2;r++)for(let i=-2;i<=2;i++)this.setFunctionModule(t+i,n+r,Math.max(Math.abs(i),Math.abs(r))!==1,e.Alignment)}setFunctionModule(t,n,r,i=e.Function){this.modules[n][t]=r,this.types[n][t]=i}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==E(t,n))throw RangeError(`Invalid argument`);let r=g[n[0]][t],i=h[n[0]][t],a=Math.floor(T(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=ce(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=le(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(T(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=v(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=d:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*p),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*p}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=d:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*p),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*p}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=f)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*m,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function _(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function v(e,t){return!!(e>>>t&1)}var y=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},te=[1,10,12,14],ne=[2,9,11,13],re=[4,8,16,16];function b(e,t){return e[Math.floor((t+7)/17)+1]}function x(e){let t=[];for(let n of e)_(n,8,t);return new y(re,e.length,t)}function ie(e){if(!C(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);_(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new y(te,e.length,t)}function S(e){if(!w(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=c.indexOf(e.charAt(n))*45;r+=c.indexOf(e.charAt(n+1)),_(r,11,t)}return n<e.length&&_(c.indexOf(e.charAt(n)),6,t),new y(ne,e.length,t)}function ae(e){return e===``?[]:C(e)?[ie(e)]:w(e)?[S(e)]:[x(se(e))]}function C(e){return o.test(e)}function w(e){return s.test(e)}function oe(e,t){let n=0;for(let r of e){let e=b(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function se(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function T(e){if(e<l||e>u)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function E(e,t){return Math.floor(T(e)/8)-h[t[0]][e]*g[t[0]][e]}function ce(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=D(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=D(n,2)}return t}function le(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=D(t,e))}return n}function D(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function ue(e,t,a=1,o=40,s=-1,c=!0){if(!(l<=a&&a<=o&&o<=u)||s<-1||s>7)throw RangeError(`Invalid value`);let d,f;for(d=a;;d++){let n=E(d,t)*8,r=oe(e,d);if(r<=n){f=r;break}if(d>=o)throw RangeError(`Data too long`)}for(let e of[n,r,i])c&&f<=E(d,e)*8&&(t=e);let p=[];for(let t of e){_(t.mode[0],4,p),_(t.numChars,b(t.mode,d),p);for(let e of t.getData())p.push(e)}let m=E(d,t)*8;_(0,Math.min(4,m-p.length),p),_(0,(8-p.length%8)%8,p);for(let e=236;p.length<m;e^=253)_(e,8,p);let h=Array.from({length:Math.ceil(p.length/8)},()=>0);return p.forEach((e,t)=>h[t>>>3]|=e<<7-(t&7)),new ee(d,t,h,s)}function de(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:o=40,maskPattern:s=-1,border:c=1}=t||{},l=typeof e==`string`?ae(e):Array.isArray(e)?[x(e)]:void 0;if(!l)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let u=ue(l,a[n],i,o,s,r),d=O({version:u.version,maskPattern:u.mask,size:u.size,data:u.modules,types:u.types},c);return t?.invert&&(d.data=d.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(d),d}function O(t,n=1){if(!n)return t;let{size:r}=t,i=r+n*2;t.size=i,t.data.forEach(e=>{for(let t=0;t<n;t++)e.unshift(!1),e.push(!1)});for(let e=0;e<n;e++)t.data.unshift(Array.from({length:i},e=>!1)),t.data.push(Array.from({length:i},e=>!1));let a=e.Border;t.types.forEach(e=>{for(let t=0;t<n;t++)e.unshift(a),e.push(a)});for(let e=0;e<n;e++)t.types.unshift(Array.from({length:i},e=>a)),t.types.push(Array.from({length:i},e=>a));return t}var fe=[`en`],k={email:`sannikov.matt@gmail.com`,phone:`+420 608 767 548`,site:`https://sannikovmatt.github.io/CV/`,github:`https://github.com/sannikovmatt`,linkedin:`https://www.linkedin.com/in/dmitriy-sannikov/`},A=[{id:`neovate`,org:`Neovate Digital s.r.o.`,url:`https://neovate.dev`,from:[2025,5],prague:!0},{id:`firstline`,org:`First Line Software`,from:[2023,1],to:[2025,5],prague:!0},{id:`junior`,org:`First Line Software`,from:[2022,1],to:[2022,12],prague:!0},{id:`zitemedia`,org:`Zitemedia`,from:[2020,11],to:[2020,12],prague:!0}],j=[{id:`thyme`,name:`thyme/labs`,url:`https://thymelabs.io`,badge:`studio`,tags:[`Safe`,`Zodiac Roles`,`ERC-4337`,`The Graph`]},{id:`findex`,name:`Findex`,url:`https://findex.io`,badge:`studio`,tags:[`Uniswap v4`,`DeFi`,`Swap routing`,`TypeScript`]},{id:`bckit`,name:`BCkit`,url:`https://bckit.cc`,badge:`live`,tags:[`EVM`,`Calldata`,`Tenderly`,`Permit2`]}],M={web3:[`Solidity`,`EVM`,`Uniswap v2/v3/v4`,`Safe`,`Zodiac Roles`,`ERC-4337`,`viem`,`wagmi`],frontend:[`TypeScript`,`React`,`Next.js`,`TanStack`,`Zustand`,`Redux`],backend:[`Node.js`,`Bun`,`Convex`,`TypeScript SDKs`,`CLI tools`],data:[`PostgreSQL`,`The Graph`,`Subgraphs`,`On-chain indexing`],cloud:[`Self-hosted nodes`,`RPC infrastructure`,`AWS S3`,`Railway`,`Microsoft Azure`],ai:[`Claude Code`,`Codex`,`LLM tools`,`AI-assisted development`]},N=[[`ru`,`native`],[`en`,`fluent`],[`cs`,`conversational`],[`az`,`fluent`]],P={en:{langName:`English`,name:`Dmitriy Sannikov`,role:`Senior Software Engineer · Web3`,prague:`Prague, Czechia · Remote`,meta:{title:`Dmitriy Sannikov — Senior Software Engineer`,description:`Senior software engineer in Prague. DeFi infrastructure, smart accounts and developer tools. Building Thyme Labs, Findex and BCkit.`},nav:{about:`About`,experience:`Experience`,projects:`Projects`,stack:`Stack`,contact:`Contact`,print:`Print CV`,language:`Language`},hero:{status:`Open to senior engineering roles`,tagline:`I build the software behind on-chain products: smart-account automation, DeFi integrations and tools developers use every day.`,contact:`Get in touch`,print:`Print CV`},stats:[[`2020`,`started in software`],[`3.5`,`years at First Line Software`],[`2–5`,`engineers led on client projects`],[`4`,`languages spoken`]],about:{label:`About`,title:`From business requirements to on-chain execution.`,body:[`I'm Dmitriy, a software engineer based in Prague. I started in frontend development, grew into a senior role at First Line Software, and led teams delivering applications for accounting, manufacturing and insurance clients.`,`Now I'm a founding team member and Lead Engineer at Neovate, working on DeFi infrastructure and developer tools. I work across TypeScript services, smart-account integrations and React interfaces, with Claude Code and Codex as part of my daily development workflow.`],services:{contracts:[`DeFi & smart accounts`,`Uniswap v2/v3/v4, liquidity integrations, swap routing and scoped execution with Safe and Zodiac Roles.`],dapps:[`Wallets & developer tools`,`Transaction simulation, calldata decoding, Safe bundles and ERC-20 / Permit2 approval management.`],indexing:[`On-chain data & infrastructure`,`Self-hosted nodes, RPC services and subgraph indexing with The Graph.`],backend:[`Automation & backend`,`TypeScript, Node.js and Bun services for scheduled execution, transaction batching, bundling and gas sponsorship.`],frontend:[`Product interfaces`,`React, Next.js and TanStack applications, from developer consoles to portfolio and trading dashboards.`],ai:[`AI-assisted development`,`Daily work with Claude Code, Codex and LLM tools to write and iterate on code across projects.`]}},experience:{label:`Experience`,title:`Where I’ve worked`,present:`Present`,jobs:{neovate:{role:`Lead Engineer · Founding team member`,summary:`Building DeFi infrastructure and developer tools at Neovate. Work across smart accounts, execution services and product interfaces.`,points:[`Thyme Labs: on-chain automation, Safe and Zodiac Roles permissions, ERC-4337 bundling and gas sponsorship.`,`DeFi integrations and swap routing with Uniswap v2/v3/v4, alongside work on Findex.`,`BCkit: calldata decoding, transaction simulation and token-approval tools.`]},firstline:{role:`Senior Developer`,summary:`Promoted after my first year. Led project delivery and worked with business stakeholders to turn requirements into technical plans.`,points:[`Led teams of 2 to 5 engineers, scoped and estimated work, and ran technical hiring interviews.`,`Across my time at First Line: invoice processing and approval workflows, factory IoT dashboards and insurance applications.`]},junior:{role:`Junior Developer`,summary:`Joined First Line Software to build JavaScript applications for clients. Promoted to Senior Developer after one year.`,points:[]},zitemedia:{role:`Frontend Developer`,summary:`Client web applications built with React, Redux and TypeScript.`,points:[]}}},projects:{label:`Projects`,title:`Projects I work on`,visit:`Open`,code:`Source`,badges:{live:`Live`,studio:`Neovate`,oss:`Open source`,winner:`Winner`},items:{thyme:`Automation and infrastructure for teams building on EVM chains. My work includes Safe smart accounts, Zodiac Roles permissions, scheduled execution, transaction bundling and gas sponsorship, plus RPC and subgraph services.`,findex:`A DeFi index-token platform built around Uniswap v4 liquidity positions. Shared work at Neovate across protocol integrations, swap routing and the applications around the protocol.`,bckit:`A free toolkit for understanding transactions before sending them. Decode calldata and Safe bundles, simulate dApp transactions with WalletConnect and Tenderly, and review or revoke ERC-20 and Permit2 approvals.`}},stack:{label:`Stack`,title:`Tools I reach for`,groups:{web3:`Web3`,frontend:`Frontend`,backend:`Backend`,data:`Data`,cloud:`Cloud & DevOps`,ai:`AI & automation`}},background:{label:`Background`,title:`Beyond the code`},languages:{title:`Languages`,native:`Native`,fluent:`Fluent`,conversational:`Conversational`,names:{ru:`Russian`,cs:`Czech`,en:`English`,az:`Azerbaijani`}},contact:{label:`Contact`,title:`Building something on-chain?`,title2:`Let's talk.`,body:`I'm open to senior engineering roles where I can build useful products, work closely with the team and take responsibility for delivery.`,copy:`Copy`,copied:`Copied`},footer:`Built with Vite, TypeScript and Tailwind. Hosted on GitHub Pages.`,print:{profile:`Profile`,experience:`Experience`,projects:`Selected projects`,skills:`Skills`,live:`Live version`,file:`Dmitriy Sannikov — CV`},months:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],certification:{title:`Certification`,name:`Microsoft Certified`,detail:`Azure Administrator Associate (AZ-104)`},availability:{title:`How I work`,name:`Prague · Remote / hybrid`,detail:`Senior software engineering, Web3 infrastructure and developer tooling.`}}},pe={arrow:`<path d="M7 7h10v10"/><path d="M7 17 17 7"/>`,printer:`<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>`,mail:`<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`,send:`<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>`,github:`<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>`,linkedin:`<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>`,copy:`<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`,check:`<path d="M20 6 9 17l-5-5"/>`,pin:`<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>`,globe:`<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>`,code:`<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>`,wallet:`<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>`,database:`<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>`,server:`<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>`,layout:`<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>`,bot:`<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>`,trophy:`<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>`,cap:`<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>`,languages:`<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>`},F=(e,t=`icon`)=>`<svg class="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${pe[e]}</svg>`,I=(e=`logo`)=>`<svg class="${e}" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2.5 27.7 9.25 16 16 4.3 9.25Z" fill="#c4b5fd"/><path d="M4.3 9.25 16 16v13.5L4.3 22.75Z" fill="#8b5cf6"/><path d="M27.7 9.25 16 16v13.5l11.7-6.75Z" fill="#6d28d9"/></svg>`,me={contracts:`code`,dapps:`wallet`,indexing:`database`,backend:`server`,frontend:`layout`,ai:`bot`},L=e=>e.replace(/^https?:\/\/(www\.)?/,``).replace(/\/$/,``),R=()=>{let e=new Date;return[e.getFullYear(),e.getMonth()+1]},z=(e,[t,n])=>`${e.months[n-1]} ${t}`,B=(e,t,n)=>`${z(e,t)} — ${n?z(e,n):e.experience.present}`;function he(e,t,n=R()){let r=(n[0]-t[0])*12+(n[1]-t[1])+1,i=(t,n)=>new Intl.NumberFormat(e,{style:`unit`,unit:t,unitDisplay:`short`}).format(n);return[Math.floor(r/12)&&i(`year`,Math.floor(r/12)),r%12&&i(`month`,r%12)].filter(Boolean).join(` `)}function ge(e){let{data:t,size:n}=de(e,{ecc:`M`,border:0}),r=``;return t.forEach((e,t)=>e.forEach((e,n)=>{e&&(r+=`M${n} ${t}h1v1h-1z`)})),`<svg viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" aria-hidden="true"><path d="${r}" fill="currentColor"/></svg>`}var V=(e,t)=>e.languages[t],H=e=>e===`en`?k.site:`${k.site}?lang=${e}`,U=`0x${(e=>[...e].map(e=>e.charCodeAt(0).toString(16)).join(``))(`sannikovmatt.github.io/CV`)}`,W=()=>Math.floor((Date.now()-Date.UTC(2020,10,1))/12e3);function _e(e,t){let n=[`about`,`experience`,`projects`,`stack`,`contact`].map(t=>`<a href="#${t}" data-nav="${t}">${e.nav[t]}</a>`).join(``);return`
<header class="nav" data-nav-bar>
  <div class="wrap nav-inner">
    <a href="#top" class="brand" aria-label="${e.name}">${I()}<span>sannikov</span></a>
    <nav class="nav-links" aria-label="Sections">${n}</nav>
    <div class="flex items-center gap-2">
      <button type="button" class="btn-icon" data-print aria-label="${e.nav.print}" title="${e.nav.print}">${F(`printer`)}</button>
    </div>
  </div>
</header>`}function ve(){let e=(e,t)=>`<div class="rc-row"><span class="rc-k">${e}</span><span class="rc-v">${t}</span></div>`;return`
<aside class="receipt card reveal" aria-hidden="true">
  <div class="rc-bar"><span class="rc-dots"><i></i><i></i><i></i></span><span>explorer / tx</span></div>
  <div class="rc-body">
    ${e(`Status`,`<span class="rc-status" data-status><span class="rc-spin"></span>Pending</span>`)}
    ${e(`Tx hash`,`<span class="truncate">${U.slice(0,10)}…${U.slice(-8)}</span>`)}
    ${e(`Block`,`<span data-block>${W().toLocaleString(`en`)}</span>`)}
    ${e(`From`,`<span class="text-accent">sannikovmatt.github.io/CV</span>`)}
    ${e(`To`,`your-next-product`)}
    ${e(`Method`,`<span class="rc-method">shipFullStack</span>()`)}
    <pre class="rc-input"><span class="c">// input</span>
<span class="k">contracts</span>: <span class="s">"Solidity"</span>
<span class="k">backend</span>:   <span class="s">"Node.js · Bun"</span>
<span class="k">frontend</span>:  <span class="s">"React · TanStack"</span>
<span class="k">chains</span>:    [<span class="s">"EVM"</span>, <span class="s">"L2s"</span>]</pre>
    ${e(`Gas`,`sponsored <span class="text-accent">✓</span>`)}
  </div>
</aside>`}function ye(e){let[t,...n]=e.name.split(` `);return`
<section class="hero wrap" id="top">
  <div class="hero-grid">
    <div class="min-w-0">
      <p class="status reveal"><span class="pulse"></span>${e.hero.status}</p>
      <h1 class="hero-name reveal"><span>${t}</span> <span class="text-gradient">${n.join(` `)}</span></h1>
      <p class="hero-role reveal">${e.role}</p>
      <p class="hero-tagline reveal">${e.hero.tagline}</p>
      <div class="hero-cta reveal">
        <a class="btn btn-primary" href="#contact">${F(`send`)}${e.hero.contact}</a>
        <button type="button" class="btn btn-ghost" data-print>${F(`printer`)}${e.hero.print}</button>
      </div>
      <p class="hero-meta reveal">${F(`pin`)}${e.prague}<span class="sep"></span><a href="${k.github}" target="_blank" rel="noopener">${F(`github`)}github.com/sannikovmatt</a></p>
    </div>
    ${ve()}
  </div>
  <dl class="stats">
    ${e.stats.map(([e,t])=>`<div class="stat reveal"><dt>${t}</dt><dd>${e}</dd></div>`).join(``)}
  </dl>
</section>`}function be(){let e=Object.values(M).flat().map(e=>`<span>${e}</span>`).join(``);return`<div class="marquee" aria-hidden="true"><div class="marquee-track">${e}${e}</div></div>`}var G=(e,t,n)=>`
<div class="sec-head reveal">
  <p class="eyebrow"><span>${e}</span>${t}</p>
  <h2 class="sec-title">${n}</h2>
</div>`;function xe(e){let t=Object.entries(e.about.services);return`
<section class="section wrap" id="about">
  ${G(`01`,e.about.label,e.about.title)}
  <div class="about-text reveal">${e.about.body.map(e=>`<p>${e}</p>`).join(``)}</div>
  <div class="services">
    ${t.map(([e,[t,n]])=>`
    <article class="card service reveal">
      <span class="service-icon">${F(me[e])}</span>
      <h3>${t}</h3>
      <p>${n}</p>
    </article>`).join(``)}
  </div>
</section>`}function Se(e,t){return`
<section class="section wrap" id="experience">
  ${G(`02`,e.experience.label,e.experience.title)}
  <ol class="timeline">
    ${A.map(n=>{let r=e.experience.jobs[n.id],i=n.org;return`
    <li class="job reveal${n.to?``:` is-current`}">
      <div class="job-when">
        <span>${B(e,n.from,n.to)}</span>
        <span class="job-dur">${he(t,n.from,n.to)}</span>
      </div>
      <div class="job-dot" aria-hidden="true"></div>
      <article class="card job-card">
        <header>
          <h3>${r.role}</h3>
          <p class="job-org">${n.url?`<a href="${n.url}" target="_blank" rel="noopener">${i}${F(`arrow`,`icon-sm`)}</a>`:i}${n.prague?`<span class="sep"></span>${e.prague}`:``}</p>
        </header>
        <p class="job-summary">${r.summary}</p>
        ${r.points.length?`<ul>${r.points.map(e=>`<li>${e}</li>`).join(``)}</ul>`:``}
      </article>
    </li>`}).join(``)}
  </ol>
</section>`}var Ce=`<pre class="code" aria-hidden="true"><span class="k">export default</span> <span class="f">defineTask</span>({
  schema: z.<span class="f">object</span>({ vault: z.<span class="f">address</span>(), minRewards: z.coerce.<span class="f">bigint</span>() }),
  <span class="k">async</span> <span class="f">run</span>(ctx) {
    <span class="k">const</span> pending = <span class="k">await</span> ctx.client.<span class="f">readContract</span>(…)
    <span class="k">if</span> (pending &lt; ctx.args.minRewards) <span class="k">return</span> { canExec: <span class="s">false</span> }
    <span class="k">return</span> { canExec: <span class="s">true</span>, calls: [harvest] }
  },
})</pre>
<ul class="modules"><li><b>Gate</b><span>EVM RPC</span></li><li><b>Atlas</b><span>Subgraphs</span></li><li><b>Flow</b><span>Automation</span></li></ul>`;function K(e){return`
<section class="section wrap" id="projects">
  ${G(`03`,e.projects.label,e.projects.title)}
  <div class="projects">
    ${j.map(t=>{let n=t.url?`a`:`div`,r=t.url?` href="${t.url}" target="_blank" rel="noopener"`:``;return`
    <${n} class="card project reveal${t.id===`thyme`?` is-featured`:``}"${r}>
      <div class="project-top">
        <span class="badge badge-${t.badge}"><i></i>${e.projects.badges[t.badge]}</span>
        ${t.url?`<span class="project-go">${F(`arrow`)}</span>`:``}
      </div>
      <h3>${t.name}</h3>
      <p class="project-host">${L(t.url)}</p>
      <p class="project-desc">${e.projects.items[t.id]}</p>
      ${t.id===`thyme`?Ce:``}
      <ul class="tags">${t.tags.map(e=>`<li>${e}</li>`).join(``)}</ul>
    </${n}>`}).join(``)}
  </div>
</section>`}function we(e){let t=Object.entries(M);return`
<section class="section wrap" id="stack">
  ${G(`04`,e.stack.label,e.stack.title)}
  <div class="stack">
    ${t.map(([t,n])=>`
    <article class="card stack-group reveal">
      <h3>${e.stack.groups[t]}</h3>
      <ul class="chips">${n.map(e=>`<li>${e}</li>`).join(``)}</ul>
    </article>`).join(``)}
  </div>
</section>`}function Te(e){return`
<section class="section wrap" id="background">
  ${G(`05`,e.background.label,e.background.title)}
  <div class="bg-grid3">
    <article class="card info reveal">
      <h3>${F(`cap`)}${e.certification.title}</h3>
      <div class="info-item"><p class="info-title">${e.certification.name}</p><p class="info-detail">${e.certification.detail}</p></div>
    </article>
    <article class="card info reveal">
      <h3>${F(`globe`)}${e.availability.title}</h3>
      <div class="info-item"><p class="info-title">${e.availability.name}</p><p class="info-detail">${e.availability.detail}</p></div>
    </article>
    <article class="card info reveal">
      <h3>${F(`languages`)}${e.languages.title}</h3>
      <ul class="spoken">
        ${N.map(([t,n])=>`<li><span>${e.languages.names[t]}</span><span class="level${n===`native`?` level-native`:``}">${V(e,n)}</span></li>`).join(``)}
      </ul>
    </article>
  </div>
</section>`}function Ee(e){let t=(e,t,n)=>`<a class="btn btn-ghost" href="${e}" target="_blank" rel="noopener">${F(t)}${n}</a>`;return`
<section class="section wrap" id="contact">
  <div class="card contact reveal">
    <p class="eyebrow"><span>06</span>${e.contact.label}</p>
    <h2 class="contact-title">${e.contact.title}<br><span class="text-gradient">${e.contact.title2}</span></h2>
    <p class="contact-body">${e.contact.body}</p>
    <div class="contact-email">
      <a href="mailto:${k.email}">${F(`mail`)}<span>${k.email}</span></a>
      <button type="button" class="btn-icon" data-copy="${k.email}" aria-label="${e.contact.copy}" title="${e.contact.copy}" data-copied="${e.contact.copied}">${F(`copy`)}</button>
    </div>
    <div class="contact-links">
      ${t(`tel:${k.phone.replaceAll(` `,``)}`,`send`,k.phone)}
      ${t(k.linkedin,`linkedin`,`LinkedIn`)}
      ${t(k.github,`github`,`GitHub`)}
    </div>
  </div>
</section>`}function De(e){return`
<footer class="footer">
  <div class="wrap">
    <p>${I(`logo logo-sm`)}© ${new Date().getFullYear()} ${e.name}</p>
    <p>${e.footer}</p>
  </div>
</footer>`}var Oe=(e,t)=>_e(e,t)+`<main>${ye(e)}${be()}${xe(e)}${Se(e,t)}${K(e)}${we(e)}${Te(e)}${Ee(e)}</main>`+De(e),ke=e=>e.split(/(?<=\.)\s/)[0];function Ae(e,t){let n=(e,t,n)=>`<li>${F(e)}<a href="${t}">${n}</a></li>`;return`
<header class="pcv-head">
  <div>
    <div class="pcv-name">${I(`pcv-logo`)}<h1>${e.name}</h1></div>
    <p class="pcv-role">${e.role}<span>${e.prague}</span></p>
    <ul class="pcv-contacts">
      ${n(`mail`,`mailto:${k.email}`,k.email)}
      ${n(`send`,`tel:${k.phone.replaceAll(` `,``)}`,k.phone)}
      ${n(`linkedin`,k.linkedin,L(k.linkedin))}
      ${n(`github`,k.github,L(k.github))}
    </ul>
  </div>
  <a class="pcv-qr" href="${H(t)}">${ge(H(t))}<span>${e.print.live}</span></a>
</header>

<section class="pcv-profile">
  <h2 class="pcv-h">${e.print.profile}</h2>
  <p>${e.about.body.join(` `)}</p>
</section>

<div class="pcv-cols">
  <div>
    <section>
      <h2 class="pcv-h">${e.print.experience}</h2>
    ${A.map(t=>{let n=e.experience.jobs[t.id],r=t.org;return`
    <article class="pcv-job">
      <header>
        <h3>${n.role} <span>· ${t.url?`<a href="${t.url}">${r}</a>`:r}</span></h3>
        <p>${B(e,t.from,t.to)}</p>
      </header>
      <p class="pcv-sub">${n.summary}</p>
      ${n.points.length?`<ul>${n.points.map(e=>`<li>${e}</li>`).join(``)}</ul>`:``}
    </article>`}).join(``)}
    </section>
    <section class="pcv-projects-wrap">
      <h2 class="pcv-h">${e.print.projects}</h2>
      <div class="pcv-projects">
        ${j.map(t=>`
        <article>
          <h3>${t.name} <a href="${t.url}">${L(t.url)}</a></h3>
          <p>${ke(e.projects.items[t.id])}</p>
        </article>`).join(``)}
      </div>
    </section>
  </div>

  <aside>
    <section>
      <h2 class="pcv-h">${e.print.skills}</h2>
      ${Object.entries(M).map(([t,n])=>`
      <div class="pcv-skill">
        <h3>${e.stack.groups[t]}</h3>
        <p>${n.map(e=>`<span>${e}</span>`).join(``)}</p>
      </div>`).join(``)}
    </section>
    <section><h2 class="pcv-h">${e.certification.title}</h2>
      <div class="pcv-item"><h3>${e.certification.name}</h3><p>${e.certification.detail}</p></div>
    </section>
    <section>
      <h2 class="pcv-h">${e.languages.title}</h2>
      <ul class="pcv-langs">
        ${N.map(([t,n])=>`<li><span>${e.languages.names[t]}</span><span>${V(e,n)}</span></li>`).join(``)}
      </ul>
    </section>
  </aside>
</div>`}var q=document.getElementById(`app`),je=document.getElementById(`print-cv`),J=e=>fe.includes(e),Y=`en`,X=[];function Me(){let e=new URLSearchParams(location.search).get(`lang`);if(J(e))return e;let t=localStorage.getItem(`lang`);if(J(t))return t;for(let e of navigator.languages??[]){let t=e.slice(0,2).toLowerCase();if(J(t))return t}return`en`}function Z(e,t){let n=P[e];Y=e,document.documentElement.lang=e,document.title=n.meta.title,document.querySelector(`meta[name="description"]`)?.setAttribute(`content`,n.meta.description),q.innerHTML=Oe(n,e),je.innerHTML=Ae(n,e),X.forEach(e=>e.disconnect()),X=[Ne(t),Pe()],Fe()}function Ne(e){let t=q.querySelectorAll(`.reveal`),n=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(t.target.classList.add(`is-in`),n.unobserve(t.target))},{rootMargin:`0px 0px -8% 0px`});return t.forEach(t=>e?n.observe(t):t.classList.add(`is-in`)),n}function Pe(){let e=q.querySelectorAll(`[data-nav]`),t=new IntersectionObserver(t=>{for(let n of t)n.isIntersecting&&e.forEach(e=>e.toggleAttribute(`aria-current`,e.dataset.nav===n.target.id))},{rootMargin:`-45% 0px -50% 0px`});return q.querySelectorAll(`main > section[id]`).forEach(e=>t.observe(e)),t}var Q=0;function Fe(){clearTimeout(Q),Q=window.setTimeout(()=>{let e=q.querySelector(`[data-status]`);e&&(e.classList.add(`is-ok`),e.innerHTML=`${F(`check`,`icon-sm`)}Success`)},1400)}setInterval(()=>{let e=q.querySelector(`[data-block]`);e&&(e.textContent=W().toLocaleString(`en`),e.classList.remove(`tick`),e.offsetWidth,e.classList.add(`tick`))},12e3),document.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-lang]`);if(n&&J(n.dataset.lang)&&n.dataset.lang!==Y){let e=n.dataset.lang;localStorage.setItem(`lang`,e);let t=new URL(location.href);e===`en`?t.searchParams.delete(`lang`):t.searchParams.set(`lang`,e),history.replaceState(null,``,t),Z(e,!1),q.querySelector(`[data-lang="${e}"]`)?.focus();return}if(t.closest(`[data-print]`)){window.print();return}let r=t.closest(`[data-copy]`);r&&navigator.clipboard?.writeText(r.dataset.copy).then(()=>{r.innerHTML=F(`check`),r.classList.add(`is-done`),r.title=r.dataset.copied,setTimeout(()=>{r.innerHTML=F(`copy`),r.classList.remove(`is-done`)},1800)})}),document.addEventListener(`pointermove`,e=>{let t=e.target.closest?.(`.card`);if(!t)return;let n=t.getBoundingClientRect();t.style.setProperty(`--mx`,`${e.clientX-n.left}px`),t.style.setProperty(`--my`,`${e.clientY-n.top}px`)});var $=()=>q.querySelector(`[data-nav-bar]`)?.classList.toggle(`is-scrolled`,scrollY>8);addEventListener(`scroll`,$,{passive:!0}),addEventListener(`beforeprint`,()=>{document.title=P[Y].print.file}),addEventListener(`afterprint`,()=>{document.title=P[Y].meta.title}),new URLSearchParams(location.search).has(`print`)&&document.documentElement.classList.add(`print-preview`),Z(Me(),!matchMedia(`(prefers-reduced-motion: reduce)`).matches),$();