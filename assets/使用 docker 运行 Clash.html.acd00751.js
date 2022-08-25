import{_ as c,o as n,c as e,a,b as s,d as o}from"./app.bd92cf30.js";var t="/blog/img/in-post/2022-06-24/clash-ui.png",l="/blog/img/in-post/2022-06-24/clash-dashboard.png";const p={},r=s(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u672C\u7BC7\u6587\u7AE0\u4E0D\u4F1A\u6D89\u53CA\u5982\u4F55\u5B89\u88C5 docker \u548C docker-compose\uFF0C\u4EE5\u53CA\u5982\u4F55\u83B7\u53D6 Clash \u914D\u7F6E\u6587\u4EF6\uFF0C\u4EE5\u4E0A\u90E8\u5206\u8BF7\u81EA\u884C\u89E3\u51B3\u3002</p><p><em>\u6D89\u53CA\u5DE5\u5177\uFF1A</em></p><ul><li>docker</li><li><a href="https://github.com/docker/compose" target="_blank" rel="noopener noreferrer">docker-compose</a></li><li><a href="https://github.com/Dreamacro/clash/wiki" target="_blank" rel="noopener noreferrer">Dreamacro/clash</a></li><li><a href="https://github.com/haishanh/yacd" target="_blank" rel="noopener noreferrer">haishanh/yacd</a></li></ul><h2 id="\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4" aria-hidden="true">#</a> \u6B65\u9AA4</h2><h3 id="_1-\u51C6\u5907-clash-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u51C6\u5907-clash-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 1.\u51C6\u5907 Clash \u914D\u7F6E\u6587\u4EF6</h3><p>\u5728\u83B7\u53D6\u5230 Clash \u914D\u7F6E\u6587\u4EF6\uFF08<code>config.yaml</code>\uFF09\u540E\uFF0C\u9700\u8981\u786E\u8BA4\u4EE5\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># config.yaml</span>

<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7890</span>
<span class="token key atrule">socks-port</span><span class="token punctuation">:</span> <span class="token number">7891</span>
<span class="token key atrule">allow-lan</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">external-controller</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9090</span>
</code></pre></div>`,8),i={class:"custom-container info"},d={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},h=a("path",{d:"M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z",style:{fill:"#157ffb","fill-rule":"nonzero"},transform:"translate(-1.257 -1.257) scale(1.0582)"},null,-1),u=[h],k=s('<p class="custom-container-title">INFO</p><p><code>7890</code> \u4E3A <code>http/https</code> \u76D1\u542C\u7AEF\u53E3\uFF0C<code>7891</code> \u4E3A <code>socks5</code> \u76D1\u542C\u7AEF\u53E3\uFF0C<code>9090</code> \u4E3A UI \u76D1\u542C\u7AEF\u53E3\uFF0C<code>allow-lan</code> \u4E3A\u5141\u8BB8\u5C40\u57DF\u7F51\u8BBF\u95EE\u3002</p>',2),m=s(`<h3 id="_2-\u521B\u5EFA\u5E76\u8FD0\u884C-container" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u5E76\u8FD0\u884C-container" aria-hidden="true">#</a> 2.\u521B\u5EFA\u5E76\u8FD0\u884C Container</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FD0\u884C Clash</span>

<span class="token function">mkdir</span> ~/clash
<span class="token function">cp</span> ./config.yaml ~/clash/ <span class="token comment"># config.yaml \u662F Clash \u7684\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> clash <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">5090</span>:9090 <span class="token parameter variable">-p</span> <span class="token number">5890</span>:7890 <span class="token parameter variable">-p</span> <span class="token number">5891</span>:7891 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> ~/clash/config.yaml:/root/.config/clash/config.yaml <span class="token parameter variable">-d</span> dreamacro/clash
</code></pre></div>`,2),_={class:"custom-container warning"},g={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},f=a("path",{d:"M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z",style:{fill:"#f3cc2e","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.18)"},null,-1),v=[f],y=a("p",{class:"custom-container-title"},"WARNING",-1),b=a("p",null,[o("\u5982\u679C\u4FEE\u6539\u8FC7 "),a("code",null,"config.yaml"),o(" \u4E2D\u76F8\u5173\u7AEF\u53E3\u7684\u914D\u7F6E\uFF0C\u8BF7\u786E\u4FDD\u4EE5\u4E0A\u7AEF\u53E3\u548C "),a("code",null,"config.yaml"),o(" \u4E2D\u7684\u7AEF\u53E3\u5BF9\u5E94\u3002")],-1),x=s(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u8FD0\u884C Clash UI</span>

<span class="token function">docker</span> run <span class="token parameter variable">--name</span> clash-ui <span class="token parameter variable">-p</span> <span class="token number">5080</span>:80 <span class="token parameter variable">-d</span> haishanh/yacd
</code></pre></div><p>\u{1F680} \u5982\u679C\u987A\u5229\u5B8C\u6210\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u90A3\u4E48 Clash \u548C Clash UI \u5C31\u5DF2\u7ECF\u6210\u529F\u8FD0\u884C\u4E86\u3002</p><h3 id="_3-\u901A\u8FC7-clash-ui-\u7BA1\u7406\u3001\u76D1\u63A7-clash-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-\u901A\u8FC7-clash-ui-\u7BA1\u7406\u3001\u76D1\u63A7-clash-\u670D\u52A1" aria-hidden="true">#</a> 3.\u901A\u8FC7 Clash UI \u7BA1\u7406\u3001\u76D1\u63A7 Clash \u670D\u52A1</h3><p>\u4F7F\u7528\u6D4F\u89C8\u5668\u6253\u5F00\u5730\u5740\uFF1A<code>http://[\u4E3B\u673AIP]:5080</code>\uFF0C\u7136\u540E\u5728\u8F93\u5165\u6846\u5185\u8F93\u5165 <code>http://[\u4E3B\u673AIP]:5090</code>\uFF0C\u518D\u70B9\u51FB <code>ADD</code> \u6309\u94AE\uFF0C\u7136\u540E\u70B9\u51FB\u4E0B\u65B9\u65B0\u589E\u7684 <code>http://[\u4E3B\u673AIP]:5090</code> \u94FE\u63A5\u8FDB\u5165\u76D1\u63A7\u754C\u9762\u3002</p><p><img src="`+t+'" alt=""><img src="'+l+`" alt=""></p><h3 id="_4-\u4F7F\u7528-docker-compose" tabindex="-1"><a class="header-anchor" href="#_4-\u4F7F\u7528-docker-compose" aria-hidden="true">#</a> 4.\u4F7F\u7528 docker-compose</h3><p>\u5982\u679C\u89C9\u5F97\u4E0A\u9762\u624B\u52A8\u6572\u547D\u4EE4\u884C\u7684\u65B9\u5F0F\u592A\u9EBB\u70E6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>docker-compose</code> \u6765\u8FD0\u884C Clash \u548C Clash UI\u3002</p><p>\u6839\u636E <a href="#_1-%E5%87%86%E5%A4%87-clash-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">\u6B65\u9AA41</a> \u51C6\u5907\u597D Clash \u7684\u914D\u7F6E\u6587\u4EF6 <code>config.yaml</code> \u540E\uFF0C\u5728 <code>config.yaml</code> \u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u521B\u5EFA <code>docker-compose.yml</code> \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>

<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">clash-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> dreamacro/clash
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> clash
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5090:9090&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5890:7890&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5891:7891&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./config.yaml<span class="token punctuation">:</span>/root/.config/clash/config.yaml

  <span class="token key atrule">clash-ui</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> haishanh/yacd
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> clash<span class="token punctuation">-</span>ui
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5080<span class="token punctuation">:</span><span class="token number">80</span>
</code></pre></div><p>\u7136\u540E\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u6267\u884C\u547D\u4EE4\uFF1A<code>docker-compose up -d</code> \u5373\u53EF\u521B\u5EFA\u5E76\u8FD0\u884C Clash \u548C Clash UI \u4E86\u3002</p><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><p><a href="https://roov.org/2020/07/docker-clash-ui/" target="_blank" rel="noopener noreferrer"><em>\u7FA4\u6656docker\u5B89\u88C5\u5E76\u8FD0\u884CClash+UI</em></a></p>`,12);function C(w,I){return n(),e("div",null,[r,a("div",i,[(n(),e("svg",d,u)),k]),m,a("div",_,[(n(),e("svg",g,v)),y,b]),x])}var E=c(p,[["render",C],["__file","\u4F7F\u7528 docker \u8FD0\u884C Clash.html.vue"]]);export{E as default};
