import{S as Pe,i as Te,s as Se,e as r,w,b as k,c as ge,f as b,g as f,h as i,m as ye,x as D,N as _e,O as Be,k as qe,P as Oe,n as Re,t as Z,a as x,o as p,d as Ce,T as Ee,C as Me,p as Ne,r as H,u as Ve,M as Ke}from"./index-3fa838ae.js";import{S as Ae}from"./SdkTabs-59d56bac.js";function ke(a,l,s){const o=a.slice();return o[5]=l[s],o}function ve(a,l,s){const o=a.slice();return o[5]=l[s],o}function we(a,l){let s,o=l[5].code+"",h,d,n,u;function m(){return l[4](l[5])}return{key:a,first:null,c(){s=r("button"),h=w(o),d=k(),b(s,"class","tab-item"),H(s,"active",l[1]===l[5].code),this.first=s},m($,g){f($,s,g),i(s,h),i(s,d),n||(u=Ve(s,"click",m),n=!0)},p($,g){l=$,g&4&&o!==(o=l[5].code+"")&&D(h,o),g&6&&H(s,"active",l[1]===l[5].code)},d($){$&&p(s),n=!1,u()}}}function $e(a,l){let s,o,h,d;return o=new Ke({props:{content:l[5].body}}),{key:a,first:null,c(){s=r("div"),ge(o.$$.fragment),h=k(),b(s,"class","tab-item"),H(s,"active",l[1]===l[5].code),this.first=s},m(n,u){f(n,s,u),ye(o,s,null),i(s,h),d=!0},p(n,u){l=n;const m={};u&4&&(m.content=l[5].body),o.$set(m),(!d||u&6)&&H(s,"active",l[1]===l[5].code)},i(n){d||(Z(o.$$.fragment,n),d=!0)},o(n){x(o.$$.fragment,n),d=!1},d(n){n&&p(s),Ce(o)}}}function Ue(a){var re,fe,pe,ue;let l,s,o=a[0].name+"",h,d,n,u,m,$,g,V=a[0].name+"",F,ee,I,y,L,S,z,C,K,te,A,B,le,G,U=a[0].name+"",J,se,Q,q,W,O,X,R,Y,P,E,v=[],oe=new Map,ae,M,_=[],ie=new Map,T;y=new Ae({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[3]}');

        ...

        await pb.collection('${(re=a[0])==null?void 0:re.name}').confirmVerification('TOKEN');

        // optionally refresh the previous authStore state with the latest record changes
        await pb.collection('${(fe=a[0])==null?void 0:fe.name}').authRefresh();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await pb.collection('${(pe=a[0])==null?void 0:pe.name}').confirmVerification('TOKEN');

        // optionally refresh the previous authStore state with the latest record changes
        await pb.collection('${(ue=a[0])==null?void 0:ue.name}').authRefresh();
    `}});let j=a[2];const ne=e=>e[5].code;for(let e=0;e<j.length;e+=1){let t=ve(a,j,e),c=ne(t);oe.set(c,v[e]=we(c,t))}let N=a[2];const ce=e=>e[5].code;for(let e=0;e<N.length;e+=1){let t=ke(a,N,e),c=ce(t);ie.set(c,_[e]=$e(c,t))}return{c(){l=r("h3"),s=w("Confirm verification ("),h=w(o),d=w(")"),n=k(),u=r("div"),m=r("p"),$=w("Confirms "),g=r("strong"),F=w(V),ee=w(" account verification request."),I=k(),ge(y.$$.fragment),L=k(),S=r("h6"),S.textContent="API details",z=k(),C=r("div"),K=r("strong"),K.textContent="POST",te=k(),A=r("div"),B=r("p"),le=w("/api/collections/"),G=r("strong"),J=w(U),se=w("/confirm-verification"),Q=k(),q=r("div"),q.textContent="Body Parameters",W=k(),O=r("table"),O.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>token</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The token from the verification request email.</td></tr></tbody>`,X=k(),R=r("div"),R.textContent="Responses",Y=k(),P=r("div"),E=r("div");for(let e=0;e<v.length;e+=1)v[e].c();ae=k(),M=r("div");for(let e=0;e<_.length;e+=1)_[e].c();b(l,"class","m-b-sm"),b(u,"class","content txt-lg m-b-sm"),b(S,"class","m-b-xs"),b(K,"class","label label-primary"),b(A,"class","content"),b(C,"class","alert alert-success"),b(q,"class","section-title"),b(O,"class","table-compact table-border m-b-base"),b(R,"class","section-title"),b(E,"class","tabs-header compact left"),b(M,"class","tabs-content"),b(P,"class","tabs")},m(e,t){f(e,l,t),i(l,s),i(l,h),i(l,d),f(e,n,t),f(e,u,t),i(u,m),i(m,$),i(m,g),i(g,F),i(m,ee),f(e,I,t),ye(y,e,t),f(e,L,t),f(e,S,t),f(e,z,t),f(e,C,t),i(C,K),i(C,te),i(C,A),i(A,B),i(B,le),i(B,G),i(G,J),i(B,se),f(e,Q,t),f(e,q,t),f(e,W,t),f(e,O,t),f(e,X,t),f(e,R,t),f(e,Y,t),f(e,P,t),i(P,E);for(let c=0;c<v.length;c+=1)v[c]&&v[c].m(E,null);i(P,ae),i(P,M);for(let c=0;c<_.length;c+=1)_[c]&&_[c].m(M,null);T=!0},p(e,[t]){var me,de,be,he;(!T||t&1)&&o!==(o=e[0].name+"")&&D(h,o),(!T||t&1)&&V!==(V=e[0].name+"")&&D(F,V);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(me=e[0])==null?void 0:me.name}').confirmVerification('TOKEN');

        // optionally refresh the previous authStore state with the latest record changes
        await pb.collection('${(de=e[0])==null?void 0:de.name}').authRefresh();
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(be=e[0])==null?void 0:be.name}').confirmVerification('TOKEN');

        // optionally refresh the previous authStore state with the latest record changes
        await pb.collection('${(he=e[0])==null?void 0:he.name}').authRefresh();
    `),y.$set(c),(!T||t&1)&&U!==(U=e[0].name+"")&&D(J,U),t&6&&(j=e[2],v=_e(v,t,ne,1,e,j,oe,E,Be,we,null,ve)),t&6&&(N=e[2],qe(),_=_e(_,t,ce,1,e,N,ie,M,Oe,$e,null,ke),Re())},i(e){if(!T){Z(y.$$.fragment,e);for(let t=0;t<N.length;t+=1)Z(_[t]);T=!0}},o(e){x(y.$$.fragment,e);for(let t=0;t<_.length;t+=1)x(_[t]);T=!1},d(e){e&&p(l),e&&p(n),e&&p(u),e&&p(I),Ce(y,e),e&&p(L),e&&p(S),e&&p(z),e&&p(C),e&&p(Q),e&&p(q),e&&p(W),e&&p(O),e&&p(X),e&&p(R),e&&p(Y),e&&p(P);for(let t=0;t<v.length;t+=1)v[t].d();for(let t=0;t<_.length;t+=1)_[t].d()}}}function je(a,l,s){let o,{collection:h=new Ee}=l,d=204,n=[];const u=m=>s(1,d=m.code);return a.$$set=m=>{"collection"in m&&s(0,h=m.collection)},s(3,o=Me.getApiExampleUrl(Ne.baseUrl)),s(2,n=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "token": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[h,d,n,o,u]}class Fe extends Pe{constructor(l){super(),Te(this,l,je,Ue,Se,{collection:0})}}export{Fe as default};
