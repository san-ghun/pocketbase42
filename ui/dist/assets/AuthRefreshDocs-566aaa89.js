import{S as je,i as xe,s as Je,M as Ue,e as s,w as k,b as p,c as K,f as b,g as d,h as o,m as Q,x as ce,N as He,O as Ke,k as Qe,P as Ie,n as We,t as N,a as V,o as u,d as I,T as Ge,C as Ee,p as Xe,r as W,u as Ye}from"./index-3fa838ae.js";import{S as Ze}from"./SdkTabs-59d56bac.js";import{F as et}from"./FieldsQueryParam-742a9ad7.js";function Le(r,l,a){const n=r.slice();return n[5]=l[a],n}function Ne(r,l,a){const n=r.slice();return n[5]=l[a],n}function Ve(r,l){let a,n=l[5].code+"",m,_,i,f;function v(){return l[4](l[5])}return{key:r,first:null,c(){a=s("button"),m=k(n),_=p(),b(a,"class","tab-item"),W(a,"active",l[1]===l[5].code),this.first=a},m($,w){d($,a,w),o(a,m),o(a,_),i||(f=Ye(a,"click",v),i=!0)},p($,w){l=$,w&4&&n!==(n=l[5].code+"")&&ce(m,n),w&6&&W(a,"active",l[1]===l[5].code)},d($){$&&u(a),i=!1,f()}}}function ze(r,l){let a,n,m,_;return n=new Ue({props:{content:l[5].body}}),{key:r,first:null,c(){a=s("div"),K(n.$$.fragment),m=p(),b(a,"class","tab-item"),W(a,"active",l[1]===l[5].code),this.first=a},m(i,f){d(i,a,f),Q(n,a,null),o(a,m),_=!0},p(i,f){l=i;const v={};f&4&&(v.content=l[5].body),n.$set(v),(!_||f&6)&&W(a,"active",l[1]===l[5].code)},i(i){_||(N(n.$$.fragment,i),_=!0)},o(i){V(n.$$.fragment,i),_=!1},d(i){i&&u(a),I(n)}}}function tt(r){var qe,De;let l,a,n=r[0].name+"",m,_,i,f,v,$,w,B,G,S,z,de,U,q,ue,X,j=r[0].name+"",Y,pe,fe,x,Z,D,ee,T,te,he,F,C,oe,be,le,me,h,_e,R,ke,ve,$e,ae,ge,se,ye,Se,we,ne,Te,Ce,M,re,O,ie,P,H,y=[],Pe=new Map,Re,E,g=[],Me=new Map,A;$=new Ze({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${r[3]}');

        ...

        const authData = await pb.collection('${(qe=r[0])==null?void 0:qe.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${r[3]}');

        ...

        final authData = await pb.collection('${(De=r[0])==null?void 0:De.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.model.id);
    `}}),R=new Ue({props:{content:"?expand=relField1,relField2.subRelField"}}),M=new et({});let J=r[2];const Ae=e=>e[5].code;for(let e=0;e<J.length;e+=1){let t=Ne(r,J,e),c=Ae(t);Pe.set(c,y[e]=Ve(c,t))}let L=r[2];const Be=e=>e[5].code;for(let e=0;e<L.length;e+=1){let t=Le(r,L,e),c=Be(t);Me.set(c,g[e]=ze(c,t))}return{c(){l=s("h3"),a=k("Auth refresh ("),m=k(n),_=k(")"),i=p(),f=s("div"),f.innerHTML=`<p>Returns a new auth response (token and record data) for an
        <strong>already authenticated record</strong>.</p> 
    <p><em>This method is usually called by users on page/screen reload to ensure that the previously stored
            data in <code>pb.authStore</code> is still valid and up-to-date.</em></p>`,v=p(),K($.$$.fragment),w=p(),B=s("h6"),B.textContent="API details",G=p(),S=s("div"),z=s("strong"),z.textContent="POST",de=p(),U=s("div"),q=s("p"),ue=k("/api/collections/"),X=s("strong"),Y=k(j),pe=k("/auth-refresh"),fe=p(),x=s("p"),x.innerHTML="Requires record <code>Authorization:TOKEN</code> header",Z=p(),D=s("div"),D.textContent="Query parameters",ee=p(),T=s("table"),te=s("thead"),te.innerHTML=`<tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr>`,he=p(),F=s("tbody"),C=s("tr"),oe=s("td"),oe.textContent="expand",be=p(),le=s("td"),le.innerHTML='<span class="label">String</span>',me=p(),h=s("td"),_e=k(`Auto expand record relations. Ex.:
                `),K(R.$$.fragment),ke=k(`
                Supports up to 6-levels depth nested relations expansion. `),ve=s("br"),$e=k(`
                The expanded relations will be appended to the record under the
                `),ae=s("code"),ae.textContent="expand",ge=k(" property (eg. "),se=s("code"),se.textContent='"expand": {"relField1": {...}, ...}',ye=k(`).
                `),Se=s("br"),we=k(`
                Only the relations to which the request user has permissions to `),ne=s("strong"),ne.textContent="view",Te=k(" will be expanded."),Ce=p(),K(M.$$.fragment),re=p(),O=s("div"),O.textContent="Responses",ie=p(),P=s("div"),H=s("div");for(let e=0;e<y.length;e+=1)y[e].c();Re=p(),E=s("div");for(let e=0;e<g.length;e+=1)g[e].c();b(l,"class","m-b-sm"),b(f,"class","content txt-lg m-b-sm"),b(B,"class","m-b-xs"),b(z,"class","label label-primary"),b(U,"class","content"),b(x,"class","txt-hint txt-sm txt-right"),b(S,"class","alert alert-success"),b(D,"class","section-title"),b(T,"class","table-compact table-border m-b-base"),b(O,"class","section-title"),b(H,"class","tabs-header compact left"),b(E,"class","tabs-content"),b(P,"class","tabs")},m(e,t){d(e,l,t),o(l,a),o(l,m),o(l,_),d(e,i,t),d(e,f,t),d(e,v,t),Q($,e,t),d(e,w,t),d(e,B,t),d(e,G,t),d(e,S,t),o(S,z),o(S,de),o(S,U),o(U,q),o(q,ue),o(q,X),o(X,Y),o(q,pe),o(S,fe),o(S,x),d(e,Z,t),d(e,D,t),d(e,ee,t),d(e,T,t),o(T,te),o(T,he),o(T,F),o(F,C),o(C,oe),o(C,be),o(C,le),o(C,me),o(C,h),o(h,_e),Q(R,h,null),o(h,ke),o(h,ve),o(h,$e),o(h,ae),o(h,ge),o(h,se),o(h,ye),o(h,Se),o(h,we),o(h,ne),o(h,Te),o(F,Ce),Q(M,F,null),d(e,re,t),d(e,O,t),d(e,ie,t),d(e,P,t),o(P,H);for(let c=0;c<y.length;c+=1)y[c]&&y[c].m(H,null);o(P,Re),o(P,E);for(let c=0;c<g.length;c+=1)g[c]&&g[c].m(E,null);A=!0},p(e,[t]){var Fe,Oe;(!A||t&1)&&n!==(n=e[0].name+"")&&ce(m,n);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        const authData = await pb.collection('${(Fe=e[0])==null?void 0:Fe.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final authData = await pb.collection('${(Oe=e[0])==null?void 0:Oe.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.model.id);
    `),$.$set(c),(!A||t&1)&&j!==(j=e[0].name+"")&&ce(Y,j),t&6&&(J=e[2],y=He(y,t,Ae,1,e,J,Pe,H,Ke,Ve,null,Ne)),t&6&&(L=e[2],Qe(),g=He(g,t,Be,1,e,L,Me,E,Ie,ze,null,Le),We())},i(e){if(!A){N($.$$.fragment,e),N(R.$$.fragment,e),N(M.$$.fragment,e);for(let t=0;t<L.length;t+=1)N(g[t]);A=!0}},o(e){V($.$$.fragment,e),V(R.$$.fragment,e),V(M.$$.fragment,e);for(let t=0;t<g.length;t+=1)V(g[t]);A=!1},d(e){e&&u(l),e&&u(i),e&&u(f),e&&u(v),I($,e),e&&u(w),e&&u(B),e&&u(G),e&&u(S),e&&u(Z),e&&u(D),e&&u(ee),e&&u(T),I(R),I(M),e&&u(re),e&&u(O),e&&u(ie),e&&u(P);for(let t=0;t<y.length;t+=1)y[t].d();for(let t=0;t<g.length;t+=1)g[t].d()}}}function ot(r,l,a){let n,{collection:m=new Ge}=l,_=200,i=[];const f=v=>a(1,_=v.code);return r.$$set=v=>{"collection"in v&&a(0,m=v.collection)},r.$$.update=()=>{r.$$.dirty&1&&a(2,i=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:Ee.dummyCollectionRecord(m)},null,2)},{code:401,body:`
                {
                  "code": 401,
                  "message": "The request requires valid record authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "code": 403,
                  "message": "The authorized record model is not allowed to perform this action.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "code": 404,
                  "message": "Missing auth record context.",
                  "data": {}
                }
            `}])},a(3,n=Ee.getApiExampleUrl(Xe.baseUrl)),[m,_,i,n,f]}class nt extends je{constructor(l){super(),xe(this,l,ot,tt,Je,{collection:0})}}export{nt as default};
