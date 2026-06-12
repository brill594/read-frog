import{r as e,t}from"./chunk-CxlSJoUg.js";import{f as n,m as r,p as i,u as a}from"./react-dom-Bm1EAsul.js";var o=e(a(),1),s=(0,o.createContext)(void 0);function c(e){let t=(0,o.useContext)(s);return e?.store||t||i()}function l({children:e,store:t}){let r=(0,o.useRef)(null);return t?(0,o.createElement)(s.Provider,{value:t},e):(r.current===null&&(r.current=n()),(0,o.createElement)(s.Provider,{value:r.current},e))}var u=e=>typeof e?.then==`function`,d=e=>{e.status||(e.status=`pending`,e.then(t=>{e.status=`fulfilled`,e.value=t},t=>{e.status=`rejected`,e.reason=t}))},f=o.use||(e=>{if(e.status===`pending`)throw e;if(e.status===`fulfilled`)return e.value;throw e.status===`rejected`?e.reason:(d(e),e)}),p=new WeakMap,m=(e,t,n)=>{let i=r(e),a=i[26],o=p.get(t);return o||(o=new Promise((r,s)=>{let c=t,l=e=>t=>{c===e&&r(t)},d=e=>t=>{c===e&&s(t)},f=()=>{try{let t=n();u(t)?(p.set(t,o),c=t,t.then(l(t),d(t)),a(i,e,t,f)):r(t)}catch(e){s(e)}};t.then(l(t),d(t)),a(i,e,t,f)}),p.set(t,o)),o};function h(e,t){let{delay:n,unstable_promiseStatus:r=!o.use}=t||{},i=c(t),[[a,s,l],p]=(0,o.useReducer)(t=>{let n=i.get(e);return Object.is(t[0],n)&&t[1]===i&&t[2]===e?t:[n,i,e]},void 0,()=>[i.get(e),i,e]),h=a;if((s!==i||l!==e)&&(p(),h=i.get(e)),(0,o.useEffect)(()=>{let t=i.sub(e,()=>{if(r)try{let t=i.get(e);u(t)&&d(m(i,t,()=>i.get(e)))}catch{}if(typeof n==`number`){console.warn(`[DEPRECATED] delay option is deprecated and will be removed in v3.

Migration guide:

Create a custom hook like the following.

function useAtomValueWithDelay<Value>(
  atom: Atom<Value>,
  options: { delay: number },
): Value {
  const { delay } = options
  const store = useStore(options)
  const [value, setValue] = useState(() => store.get(atom))
  useEffect(() => {
    const unsub = store.sub(atom, () => {
      setTimeout(() => setValue(store.get(atom)), delay)
    })
    return unsub
  }, [store, atom, delay])
  return value
}
`),setTimeout(p,n);return}p()});return p(),t},[i,e,n,r]),(0,o.useDebugValue)(h),u(h)){let t=m(i,h,()=>i.get(e));return r&&d(t),f(t)}return h}function g(e,t){let n=c(t);return(0,o.useCallback)((...t)=>n.set(e,...t),[n,e])}function _(e,t){return[h(e,t),g(e,t)]}var v=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),y=t(((e,t)=>{t.exports=v()}));export{g as a,h as i,l as n,c as o,_ as r,y as t};