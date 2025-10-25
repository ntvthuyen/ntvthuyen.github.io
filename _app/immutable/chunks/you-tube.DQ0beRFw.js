import{s as D,o as Y,h as j,g as C,i as R,u as P,j as M,k as O,d as V,b as G}from"./scheduler.bcJVWkt9.js";import{S as q,i as A,e as m,c as h,a as v,d as b,r as _,g as I,D as H,o as y,A as z,n as g,I as p,k as B,l as J,m as K,p as L,h as N}from"./index.Bfd6G0_T.js";import{b as k}from"./posts.CnOlTByQ.js";function Q(o){let t,e,s;const a=o[5].default,r=R(a,o,o[4],null);return{c(){t=m("div"),r&&r.c()},l(i){t=h(i,"DIV",{});var l=v(t);r&&r.l(l),l.forEach(b)},m(i,l){I(i,t,l),r&&r.m(t,null),s=!0},p(i,l){r&&r.p&&(!s||l&16)&&P(r,a,i,i[4],s?O(a,i[4],l,null):M(i[4]),null)},i(i){s||(g(r,i),i&&V(()=>{s&&(e||(e=p(t,k,{},!0)),e.run(1))}),s=!0)},o(i){y(r,i),i&&(e||(e=p(t,k,{},!1)),e.run(0)),s=!1},d(i){i&&b(t),r&&r.d(i),i&&e&&e.end()}}}function W(o){let t,e,s;const a=o[5].default,r=R(a,o,o[4],null);return{c(){t=m("div"),r&&r.c()},l(i){t=h(i,"DIV",{});var l=v(t);r&&r.l(l),l.forEach(b)},m(i,l){I(i,t,l),r&&r.m(t,null),s=!0},p(i,l){r&&r.p&&(!s||l&16)&&P(r,a,i,i[4],s?O(a,i[4],l,null):M(i[4]),null)},i(i){s||(g(r,i),i&&V(()=>{s&&(e||(e=p(t,k,{},!0)),e.run(1))}),s=!0)},o(i){y(r,i),i&&(e||(e=p(t,k,{},!1)),e.run(0)),s=!1},d(i){i&&b(t),r&&r.d(i),i&&e&&e.end()}}}function X(o){let t,e,s,a;const r=[W,Q],i=[];function l(n,d){return n[0]?0:n[1]?1:-1}return~(e=l(o))&&(s=i[e]=r[e](o)),{c(){t=m("div"),s&&s.c(),this.h()},l(n){t=h(n,"DIV",{"data-testid":!0});var d=v(t);s&&s.l(d),d.forEach(b),this.h()},h(){_(t,"data-testid","general-observer")},m(n,d){I(n,t,d),~e&&i[e].m(t,null),o[6](t),a=!0},p(n,[d]){let c=e;e=l(n),e===c?~e&&i[e].p(n,d):(s&&(H(),y(i[c],1,1,()=>{i[c]=null}),z()),~e?(s=i[e],s?s.p(n,d):(s=i[e]=r[e](n),s.c()),g(s,1),s.m(t,null)):s=null)},i(n){a||(g(s),a=!0)},o(n){y(s),a=!1},d(n){n&&b(t),~e&&i[e].d(),o[6](null)}}}function Z(o,t,e){let{$$slots:s={},$$scope:a}=t,{threshold:r=.5}=t,{disable_observer:i=!1}=t,l=i,n,c=typeof IntersectionObserver<"u"&&!i?new IntersectionObserver(u=>{u.forEach(T=>{T.intersectionRatio>=r&&(e(1,l=!0),c.disconnect())})},{rootMargin:"0px",threshold:r}):null;Y(()=>{c&&c.observe(n)}),j(()=>{c&&c.disconnect()});function w(u){C[u?"unshift":"push"](()=>{n=u,e(2,n)})}return o.$$set=u=>{"threshold"in u&&e(3,r=u.threshold),"disable_observer"in u&&e(0,i=u.disable_observer),"$$scope"in u&&e(4,a=u.$$scope)},[i,l,n,r,a,s,w]}class x extends q{constructor(t){super(),A(this,t,Z,X,D,{threshold:3,disable_observer:0})}}const $={"1:1":"padding-top: 100%;","16:9":"padding-top: 56.25%;","4:3":"padding-top: 75%;","3:2":"padding-top: 66.66%;","8.5":"padding-top: 62.5%;"},E=o=>$[o];function ee(o){let t,e,s,a,r,i;return{c(){t=m("div"),e=m("iframe"),this.h()},l(l){t=h(l,"DIV",{style:!0});var n=v(t);e=h(n,"IFRAME",{"data-testid":!0,title:!0,src:!0,frameborder:!0,allow:!0,style:!0}),v(e).forEach(b),n.forEach(b),this.h()},h(){_(e,"data-testid","youTube"),_(e,"title",s=`youTube-${o[1].length>0?o[1]:o[0]}`),G(e.src,a=o[5])||_(e,"src",a),_(e,"frameborder","0"),_(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),e.allowFullscreen=!0,_(e,"style",r=`
	      position: absolute;
  	    top: 0;
    	  left: 0;
      	width: 100%;
      	height: 100%;
				${o[4]}
    `),_(t,"style",i=`
    	position: relative;
    	width: 100%;
  	  ${E(o[2])}
  `)},m(l,n){I(l,t,n),N(t,e)},p(l,n){n&3&&s!==(s=`youTube-${l[1].length>0?l[1]:l[0]}`)&&_(e,"title",s),n&16&&r!==(r=`
	      position: absolute;
  	    top: 0;
    	  left: 0;
      	width: 100%;
      	height: 100%;
				${l[4]}
    `)&&_(e,"style",r),n&4&&i!==(i=`
    	position: relative;
    	width: 100%;
  	  ${E(l[2])}
  `)&&_(t,"style",i)},d(l){l&&b(t)}}}function te(o){let t,e;return t=new x({props:{disable_observer:o[3],$$slots:{default:[ee]},$$scope:{ctx:o}}}),{c(){B(t.$$.fragment)},l(s){J(t.$$.fragment,s)},m(s,a){K(t,s,a),e=!0},p(s,[a]){const r={};a&8&&(r.disable_observer=s[3]),a&32791&&(r.$$scope={dirty:a,ctx:s}),t.$set(r)},i(s){e||(g(t.$$.fragment,s),e=!0)},o(s){y(t.$$.fragment,s),e=!1},d(s){L(t,s)}}}function ie(o,t,e){let{youTubeId:s=""}=t,{listId:a=""}=t,{autoPlay:r=!1}=t,{aspectRatio:i="16:9"}=t,{skipTo:l={h:0,m:0,s:0}}=t,{disable_observer:n=!1}=t,{iframe_styles:d=`
		border-radius: 0.6rem;
	`}=t;const{h:c,m:w,s:u}=l,T=c*60*60,F=w*60,S=T+F+u,U=`https://www.youtube-nocookie.com/embed/${s.length>0?`${s}?autoplay=${r}&start=${S}`:`?videoseries?list=${a}`}`;return o.$$set=f=>{"youTubeId"in f&&e(0,s=f.youTubeId),"listId"in f&&e(1,a=f.listId),"autoPlay"in f&&e(6,r=f.autoPlay),"aspectRatio"in f&&e(2,i=f.aspectRatio),"skipTo"in f&&e(7,l=f.skipTo),"disable_observer"in f&&e(3,n=f.disable_observer),"iframe_styles"in f&&e(4,d=f.iframe_styles)},[s,a,i,n,d,U,r,l]}class oe extends q{constructor(t){super(),A(this,t,ie,te,D,{youTubeId:0,listId:1,autoPlay:6,aspectRatio:2,skipTo:7,disable_observer:3,iframe_styles:4})}}export{oe as Y};
