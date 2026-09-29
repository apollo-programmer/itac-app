(globalThis.rspackChunk_affine_monorepo=globalThis.rspackChunk_affine_monorepo||[]).push([[8410],{60386(e,t,s){"use strict";var r=s(17833),i=s.n(r);let n="affine:debug";"u">typeof window&&(window.location.search.includes("debug")&&((e,t)=>{try{sessionStorage.setItem(e,t)}catch{}})(n,"true"),"true"===(e=>{try{return sessionStorage.getItem(e)}catch{return null}})(n)&&(i().enable("*"),console.warn("Debug logs enabled")));let DebugLogger=class DebugLogger{constructor(e){this._debug=i()(e)}set enabled(e){this._debug.enabled=e}get enabled(){return this._debug.enabled}debug(e,...t){this.log("debug",e,...t)}info(e,...t){this.log("info",e,...t)}warn(e,...t){this.log("warn",e,...t)}error(e,...t){this.log("error",e,...t)}log(e,t,...s){this._debug.log=console[e].bind(console),this._debug(`[${e.toUpperCase()}] ${t}`,...s)}namespace(e){let t=this._debug.namespace;return new DebugLogger(`${t}:${e}`)}};s.d(t,{k:()=>DebugLogger})},68951(e,t,s){"use strict";var r=s(31928);function i(e){return new UserFriendlyError({status:500,code:"INTERNAL_SERVER_ERROR",type:"INTERNAL_SERVER_ERROR",name:"INTERNAL_SERVER_ERROR",message:e})}let GraphQLError=class GraphQLError extends r.eO{};let UserFriendlyError=class UserFriendlyError extends Error{static fromAny(e){if(e instanceof UserFriendlyError)return e;switch(typeof e){case"string":return i(e);case"object":if(e){if(e instanceof GraphQLError)return new UserFriendlyError(e.extensions);else if(e.type&&e.name&&e.message)return new UserFriendlyError(e);else if(e.message)return i(e.message)}}return i("Unhandled error raised. Please contact us for help.")}constructor(e){super(e.message),this.response=e,this.status=this.response.status,this.code=this.response.code,this.type=this.response.type,this.name=this.response.name,this.message=this.response.message,this.data=this.response.data,this.stacktrace=this.response.stacktrace}is(e){return this.name===e}isStatus(e){return this.status===e}static isNetworkError(e){return"NETWORK_ERROR"===e.name}static notNetworkError(e){return!UserFriendlyError.isNetworkError(e)}isNetworkError(){return UserFriendlyError.isNetworkError(this)}notNetworkError(){return UserFriendlyError.notNetworkError(this)}};s.d(t,{P:()=>UserFriendlyError,e:()=>GraphQLError})},32874(e,t,s){"use strict";let r=`fragment CredentialsRequirements on CredentialsRequirementType {
  password {
    ...PasswordLimits
  }
}`,i=`fragment PasswordLimits on PasswordLimitsType {
  minLength
  maxLength
}`,n={id:"adminDashboardQuery",op:"adminDashboard",query:`query adminDashboard($input: AdminDashboardInput) {
  adminDashboard(input: $input) {
    syncActiveUsers
    syncActiveUsersTimeline {
      minute
      activeUsers
    }
    syncWindow {
      from
      to
      timezone
      bucket
      requestedSize
      effectiveSize
    }
    copilotConversations
    copilotWindow {
      from
      to
      timezone
      bucket
      requestedSize
      effectiveSize
    }
    workspaceStorageBytes
    blobStorageBytes
    workspaceStorageHistory {
      date
      value
    }
    blobStorageHistory {
      date
      value
    }
    storageWindow {
      from
      to
      timezone
      bucket
      requestedSize
      effectiveSize
    }
    topSharedLinks {
      workspaceId
      docId
      title
      shareUrl
      publishedAt
      views
      uniqueViews
      guestViews
      lastAccessedAt
    }
    topSharedLinksWindow {
      from
      to
      timezone
      bucket
      requestedSize
      effectiveSize
    }
    generatedAt
  }
}`},a={id:"adminMailDeliveriesQuery",op:"adminMailDeliveries",query:`query adminMailDeliveries($input: AdminMailDeliveriesInput) {
  adminMailDeliveries(input: $input) {
    window {
      from
      to
      timezone
      bucket
      requestedSize
      effectiveSize
    }
    summary {
      total
      sent
      failed
      skipped
      canceled
      queued
      sending
      retryWait
      successRate
    }
    byStatus {
      key
      label
      total
      points {
        bucket
        count
      }
    }
    byType {
      key
      label
      total
      points {
        bucket
        count
      }
    }
    byOutcome {
      key
      label
      total
      points {
        bucket
        count
      }
    }
  }
}`},o={id:"adminServerConfigQuery",op:"adminServerConfig",query:`query adminServerConfig {
  serverConfig {
    version
    baseUrl
    name
    features
    type
    initialized
    credentialsRequirement {
      ...CredentialsRequirements
    }
    availableUpgrade {
      changelog
      version
      publishedAt
      url
    }
    availableUserFeatures
  }
}
${i}
${r}`},l={id:"adminUpdateWorkspaceMutation",op:"adminUpdateWorkspace",query:`mutation adminUpdateWorkspace($input: AdminUpdateWorkspaceInput!) {
  adminUpdateWorkspace(input: $input) {
    id
    public
    createdAt
    name
    avatarKey
    enableAi
    enableSharing
    enableUrlPreview
    enableDocEmbedding
    owner {
      id
      name
      email
      avatarUrl
    }
    memberCount
    publicPageCount
    snapshotCount
    snapshotSize
    blobCount
    blobSize
  }
}`},d={id:"adminWorkspaceQuery",op:"adminWorkspace",query:`query adminWorkspace($id: String!, $memberSkip: Int, $memberTake: Int, $memberQuery: String) {
  adminWorkspace(id: $id) {
    id
    public
    createdAt
    name
    avatarKey
    enableAi
    enableSharing
    enableUrlPreview
    enableDocEmbedding
    owner {
      id
      name
      email
      avatarUrl
    }
    memberCount
    publicPageCount
    snapshotCount
    snapshotSize
    blobCount
    blobSize
    sharedLinks {
      docId
      title
      publishedAt
    }
    members(skip: $memberSkip, take: $memberTake, query: $memberQuery) {
      id
      name
      email
      avatarUrl
      role
      status
    }
  }
}`},u={id:"adminWorkspacesQuery",op:"adminWorkspaces",query:`query adminWorkspaces($filter: ListWorkspaceInput!) {
  adminWorkspaces(filter: $filter) {
    id
    public
    createdAt
    name
    avatarKey
    enableAi
    enableSharing
    enableUrlPreview
    enableDocEmbedding
    owner {
      id
      name
      email
      avatarUrl
    }
    memberCount
    publicPageCount
    snapshotCount
    snapshotSize
    blobCount
    blobSize
  }
}`},c={id:"adminWorkspacesCountQuery",op:"adminWorkspacesCount",query:`query adminWorkspacesCount($filter: ListWorkspaceInput!) {
  adminWorkspacesCount(filter: $filter)
}`},m={id:"authSigningKeysQuery",op:"authSigningKeys",query:`query authSigningKeys {
  authSigningKeys {
    id
    status
    source
    createdAt
    retiredAt
    verifyUntil
    canDelete
  }
}`},p={id:"createChangePasswordUrlMutation",op:"createChangePasswordUrl",query:`mutation createChangePasswordUrl($callbackUrl: String!, $userId: String!) {
  createChangePasswordUrl(callbackUrl: $callbackUrl, userId: $userId)
}`},f={id:"appConfigQuery",op:"appConfig",query:`query appConfig {
  appConfig
}`},h={id:"createUserMutation",op:"createUser",query:`mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
  }
}`},g={id:"deleteAuthSigningKeyMutation",op:"deleteAuthSigningKey",query:`mutation deleteAuthSigningKey($id: String!) {
  deleteAuthSigningKey(id: $id) {
    id
    status
    source
    createdAt
    retiredAt
    verifyUntil
    canDelete
  }
}`},b={id:"deleteUserMutation",op:"deleteUser",query:`mutation deleteUser($id: String!) {
  deleteUser(id: $id) {
    success
  }
}`},x={id:"disableUserMutation",op:"disableUser",query:`mutation disableUser($id: String!) {
  banUser(id: $id) {
    email
    disabled
  }
}`},y={id:"enableUserMutation",op:"enableUser",query:`mutation enableUser($id: String!) {
  enableUser(id: $id) {
    email
    disabled
  }
}`},w={id:"importUsersMutation",op:"ImportUsers",query:`mutation ImportUsers($input: ImportUsersInput!) {
  importUsers(input: $input) {
    __typename
    ... on UserType {
      id
      name
      email
    }
    ... on UserImportFailedType {
      email
      error
    }
  }
}`},v={id:"listUsersQuery",op:"listUsers",query:`query listUsers($filter: ListUserInput!) {
  users(filter: $filter) {
    id
    name
    email
    disabled
    features
    hasPassword
    emailVerified
    avatarUrl
  }
  usersCount(filter: $filter)
}`},j={id:"rotateAuthSigningKeyMutation",op:"rotateAuthSigningKey",query:`mutation rotateAuthSigningKey($expectedActiveKeyId: String!) {
  rotateAuthSigningKey(expectedActiveKeyId: $expectedActiveKeyId) {
    id
    status
    source
    createdAt
    retiredAt
    verifyUntil
    canDelete
  }
}`},S={id:"sendTestEmailMutation",op:"sendTestEmail",query:`mutation sendTestEmail($name: String!, $host: String!, $port: Int!, $sender: String!, $username: String!, $password: String!, $ignoreTLS: Boolean!) {
  sendTestEmail(
    config: {name: $name, host: $host, port: $port, sender: $sender, username: $username, password: $password, ignoreTLS: $ignoreTLS}
  )
}`},C={id:"updateAccountFeaturesMutation",op:"updateAccountFeatures",query:`mutation updateAccountFeatures($userId: String!, $features: [FeatureType!]!) {
  updateUserFeatures(id: $userId, features: $features)
}`},N={id:"updateAccountMutation",op:"updateAccount",query:`mutation updateAccount($id: String!, $input: ManageUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
  }
}`},k={id:"updateAppConfigMutation",op:"updateAppConfig",query:`mutation updateAppConfig($updates: [UpdateAppConfigInput!]!) {
  updateAppConfig(updates: $updates)
}`},U={id:"getCurrentUserFeaturesQuery",op:"getCurrentUserFeatures",query:`query getCurrentUserFeatures {
  currentUser {
    id
    name
    email
    emailVerified
    avatarUrl
    features
  }
}`},A={id:"getUserFeaturesQuery",op:"getUserFeatures",query:`query getUserFeatures {
  currentUser {
    id
    features
  }
}`},E={id:"previewLicenseMutation",op:"previewLicense",query:`mutation previewLicense($license: Upload!) {
  previewLicense(license: $license) {
    id
    workspaceId
    plan
    recurring
    quantity
    issuedAt
    expiresAt
    endAt
    entity
    issuer
    valid
  }
}`,file:!0};s.d(t,{},{$M3:o,Auc:S,ChE:k,DlQ:g,FqT:l,HRZ:a,I72:n,IAO:u,OCp:U,PeE:C,T9X:h,UxD:N,VMt:A,Zom:v,ZrK:w,aZU:f,ejs:y,h8G:j,hT9:d,hWA:E,hf0:x,iFF:p,jqp:c,qTu:b,qlT:m})},5145(e,t,s){"use strict";var r,i,n=((r={}).BlobCount="BlobCount",r.BlobSize="BlobSize",r.CreatedAt="CreatedAt",r.MemberCount="MemberCount",r.PublicPageCount="PublicPageCount",r.SnapshotCount="SnapshotCount",r.SnapshotSize="SnapshotSize",r),a=((i={}).Admin="Admin",i);s.d(t,{lo:()=>a,pe:()=>n})},94471(e,t,s){"use strict";s.d(t,{},{Q:(e,t)=>{let s=t?.method?.toUpperCase()??"GET",r="GET"!==s&&"HEAD"!==s?function(e){if("u"<typeof document)return null;for(let t of document.cookie?document.cookie.split("; "):[]){let s=t.indexOf("=");if((-1===s?t:t.slice(0,s))===e)return -1===s?"":t.slice(s+1)}return null}("affine_csrf_token"):null;return fetch(e,{...t,headers:{...t?.headers,"x-affine-version":"0.27.5",...r?{"x-affine-csrf-token":r}:{}}})}})},98044(e,t,s){"use strict";var r=s(32874),i=s(5145),n=s(96540),a=s(42210),o=s(21944);function l(e){return e.features.includes(i.lo.Admin)}function d(e){let[t,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{function t(e){s(e.matches)}let r=matchMedia(e);return r.addEventListener("change",t),s(r.matches),()=>r.removeEventListener("change",t)},[e]),t}s.d(t,{Ub:()=>d,qc:()=>l},{B3:()=>{let e=(0,a.i)();return()=>e(r.OCp)},LN:()=>{let{data:e}=(0,o.IT)({query:r.$M3});return e.serverConfig},Yq:()=>{let e=(0,a.i)();return()=>e(r.$M3)},iZ:()=>{let{data:e}=(0,o.IT)({query:r.OCp});return e.currentUser}})},56391(e,t,s){"use strict";var r=s(96540);let i=(0,r.createContext)(void 0),n=()=>{let e=(0,r.useContext)(i);if(!e)throw Error("usePanelContext must be used within a PanelProvider");return e};s.d(t,{},{GM:i,b9:()=>n().leftPanel,oj:()=>n().rightPanel})},42210(e,t,s){"use strict";var r=s(96540),i=s(14993),n=s(53616),a=s(21944);function o(e,t){return(0,n.A)(()=>["cloud",e.mutation.id],(t,{arg:s})=>(0,a.EE)({...e,query:e.mutation,variables:s}),t)}s.d(t,{n:()=>o},{i:()=>{let{mutate:e}=(0,i.iX)();return(0,r.useMemo)(()=>(t,s=e=>!0)=>e(e=>{let r=Array.isArray(e)&&"cloud"===e[0]&&e[1]===t.id&&s(e[2]);return r&&console.debug("revalidate resource",e),r}),[e])}})},21944(e,t,s){"use strict";s.d(t,{EE:()=>p,IT:()=>m});var r=s(60386),i=s(68951),n=s(97859),a=s(23149),o=s(37778),l=s(96540),d=s(92177),u=s(54225);let c=e=>(t,s)=>{let r=(0,l.useMemo)(()=>({suspense:!0,...s}),[s]);return(e?u.A:d.Ay)(t?()=>["cloud",t.query.id,t.variables]:null,t?()=>p(t):null,r)},m=c(!1);c(!0);let p=((e,t=fetch)=>{let s=new r.k("GraphQL");return async r=>{r.query.deprecations?.length&&r.query.deprecations.forEach(e=>{s.warn(e)});let l=function({query:e,variables:t,keepNilVariables:s}){let r={query:e.query,variables:s??!0?t:function e(t){let s={};return Object.entries(t).forEach(([t,r])=>{if(!(0,n.A)(r)){if((0,a.A)(r)&&!(r instanceof File)){s[t]=e(r);return}s[t]=r}}),s}(t)};return(e.op&&(r.operationName=e.op),e.file)?function(e){let t=new FormData,s={query:e.query,variables:e.variables,map:{}};e.operationName&&(s.name=e.operationName);let r={},i=[];if(e.variables){let t=0,s=(e,n)=>{n instanceof File?(r[""+t]=[e],i[t]=n,t++):Array.isArray(n)?n.forEach((t,r)=>{s(`${e}.${r}`,t)}):(0,a.A)(n)&&Object.entries(n).forEach(([t,r])=>{s(`${e}.${t}`,r)})};s("variables",e.variables)}for(let[e,n]of(t.set("operations",JSON.stringify(s)),t.set("map",JSON.stringify(r)),i.entries()))t.set(`${e}`,n);return t}(r):r}(r),d=l instanceof FormData,u={"x-operation-name":r.query.op};return d||(u["content-type"]="application/json"),t(e,(0,o.A)(r.context,{method:"POST",headers:u,body:d?l:JSON.stringify(l),timeout:r.timeout,signal:r.signal})).then(async e=>{if(e.headers.get("content-type")?.startsWith("application/json")){let t=await e.json();if(e.status>=400||t.errors)if(t.errors&&t.errors.length>0){let e=t.errors[0];throw new i.e(e.message,e)}else throw new i.e("Empty GraphQL error body");if(t.data)return t.data}throw new i.e("GraphQL query responds unexpected result, query "+r.query.op)})}})("/graphql",window.fetch)},95514(e,t,s){"use strict";var r=s(34164),i=s(50856);function n(...e){return(0,i.QP)((0,r.$)(e))}let a=/^(?:(?:[^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(?:(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|((?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;s.d(t,{cn:()=>n},{H:(e,t,s,r,i)=>{let n=a.test(e),o=t.length>=s.minLength&&t.length<=s.maxLength;return r?.(!n),i?.(!o),n&&o},U:a})},66656(){globalThis.requestIdleCallback=globalThis.requestIdleCallback||function(e){let t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},globalThis.cancelIdleCallback=globalThis.cancelIdleCallback||function(e){clearTimeout(e)}},24403(e,t,s){s.p=environment.publicPath},28812(e,t,s){"use strict";s.d(t,{bw:()=>n,RZ:()=>i});var r=s(96540);function i(e,t){let s=(0,r.lazy)(()=>e().then(e=>{if("default"in e)return{default:e.default};{let t=Object.values(e);return t.length>1&&console.warn("Lazy loaded module has more then one exports"),{default:t[0]}}}));return function(e){return r.createElement(r.Suspense,{fallback:t},r.createElement(s,e))}}let n={index:"/",admin:{index:"/admin",auth:"/admin/auth",setup:"/admin/setup",dashboard:"/admin/dashboard",accounts:"/admin/accounts",workspaces:"/admin/workspaces",ai:"/admin/ai",settings:{index:"/admin/settings",module:"/admin/settings/:module"},about:"/admin/about",notFound:"/admin/404"}},a=()=>"/admin";a.auth=()=>"/admin/auth",a.setup=()=>"/admin/setup",a.dashboard=()=>"/admin/dashboard",a.accounts=()=>"/admin/accounts",a.workspaces=()=>"/admin/workspaces",a.ai=()=>"/admin/ai";let o=()=>"/admin/settings";o.module=e=>`/admin/settings/${e.module}`,a.settings=o,a.about=()=>"/admin/about",a.notFound=()=>"/admin/404"},76045(e,t,s){"use strict";var r=s(74848),i=s(95514),n=s(87770),a=s(96540);let o=a.forwardRef(({className:e,...t},s)=>(0,r.jsx)(n.bL,{ref:s,className:(0,i.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...t}));o.displayName=n.bL.displayName;let l=a.forwardRef(({className:e,...t},s)=>(0,r.jsx)(n._V,{ref:s,crossOrigin:"anonymous",className:(0,i.cn)("aspect-square h-full w-full",e),...t}));l.displayName=n._V.displayName;let d=a.forwardRef(({className:e,...t},s)=>(0,r.jsx)(n.H4,{ref:s,className:(0,i.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...t}));d.displayName=n.H4.displayName,s.d(t,{},{BK:l,eu:o,q5:d})},35970(e,t,s){"use strict";var r=s(74848),i=s(95514),n=s(33362),a=s(22732),o=s(96540);let l=(0,a.F)("inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-[background-color,color,border-color,box-shadow,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-1 hover:bg-primary/90 active:translate-y-px",destructive:"bg-destructive text-destructive-foreground shadow-1 hover:bg-destructive/90 active:translate-y-px",outline:"border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-muted",ghost:"text-muted-foreground hover:bg-accent hover:text-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4",sm:"h-8 px-3 text-xs",lg:"h-10 px-6",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=o.forwardRef(({className:e,variant:t,size:s,asChild:a=!1,...o},d)=>{let u=a?n.DX:"button";return(0,r.jsx)(u,{className:(0,i.cn)(l({variant:t,size:s,className:e})),ref:d,...o})});d.displayName="Button",s.d(t,{},{$:d,r:l})},84181(e,t,s){"use strict";var r=s(74848),i=s(95514),n=s(62837),a=s(87677),o=s(45773),l=s(68309),d=s(96540);let u=n.bL,c=n.l9;n.YJ,n.ZL,n.Pb,n.z6,d.forwardRef(({className:e,inset:t,children:s,...o},l)=>(0,r.jsxs)(n.ZP,{ref:l,className:(0,i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...o,children:[s,(0,r.jsx)(a.A,{className:"ml-auto h-4 w-4"})]})).displayName=n.ZP.displayName,d.forwardRef(({className:e,...t},s)=>(0,r.jsx)(n.G5,{ref:s,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})).displayName=n.G5.displayName;let m=d.forwardRef(({className:e,sideOffset:t=4,...s},a)=>(0,r.jsx)(n.ZL,{children:(0,r.jsx)(n.UC,{ref:a,sideOffset:t,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s})}));m.displayName=n.UC.displayName;let p=d.forwardRef(({className:e,inset:t,...s},a)=>(0,r.jsx)(n.q7,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...s}));p.displayName=n.q7.displayName,d.forwardRef(({className:e,children:t,checked:s,...a},l)=>(0,r.jsxs)(n.H_,{ref:l,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:s,...a,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(n.VF,{children:(0,r.jsx)(o.A,{className:"h-4 w-4"})})}),t]})).displayName=n.H_.displayName,d.forwardRef(({className:e,children:t,...s},a)=>(0,r.jsxs)(n.hN,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...s,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(n.VF,{children:(0,r.jsx)(l.A,{className:"h-2 w-2 fill-current"})})}),t]})).displayName=n.hN.displayName;let f=d.forwardRef(({className:e,inset:t,...s},a)=>(0,r.jsx)(n.JU,{ref:a,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...s}));f.displayName=n.JU.displayName;let h=d.forwardRef(({className:e,...t},s)=>(0,r.jsx)(n.wv,{ref:s,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",e),...t}));h.displayName=n.wv.displayName,s.d(t,{},{SQ:m,_2:p,lp:f,mB:h,rI:u,ty:c})},69961(e,t,s){"use strict";var r=s(74848),i=s(95514),n=s(60819);let a=s(96540).forwardRef(({className:e,orientation:t="horizontal",decorative:s=!0,...a},o)=>(0,r.jsx)(n.b,{ref:o,decorative:s,orientation:t,className:(0,i.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...a}));a.displayName=n.b.displayName,s.d(t,{},{w:a})},19902(e,t,s){"use strict";let r,i,n;var a=s(74848);let UaHelper=class UaHelper{constructor(e){this.navigator=e,this.isLinux=!1,this.isMacOs=!1,this.isSafari=!1,this.isWindows=!1,this.isFireFox=!1,this.isMobile=!1,this.isChrome=!1,this.isIOS=!1,this.isStandalone=!1,this.getChromeVersion=()=>{let e=this.navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return(e||(e=this.navigator.userAgent.match(/(CriOS)\/([0-9]+)/)),e)?parseInt(e[2]??"",10):(console.error("Cannot get chrome version"),0)},this.uaMap=o(e),this.initUaFlags()}checkUseragent(e){return!!this.uaMap[e]}isStandaloneMode(){return!("u"<typeof window)&&("standalone"in window.navigator?!!window.navigator.standalone:!!window.matchMedia("(display-mode: standalone)").matches)}initUaFlags(){this.isLinux=this.checkUseragent("linux"),this.isMacOs=this.checkUseragent("mac"),this.isSafari=this.checkUseragent("safari"),this.isWindows=this.checkUseragent("win"),this.isFireFox=this.checkUseragent("firefox"),this.isMobile=this.checkUseragent("mobile"),this.isChrome=this.checkUseragent("chrome"),this.isIOS=this.checkUseragent("ios"),this.isStandalone=this.isStandaloneMode()}};let o=e=>{let t=e.userAgent,s=t.toLowerCase(),r=/iPhone|iPad|iPod|Android/i.test(t),i=r&&(s.indexOf("android")>-1||s.indexOf("linux")>-1)||s.indexOf("adr")>-1,n=r&&!i&&/Mac OS/i.test(t),a=!r&&/Mac OS/i.test(t),o=n&&s.indexOf("iphone")>-1,l=/MicroMessenger/i.test(t),d=/CriOS/i.test(t)||/Chrome/i.test(t),u=r&&/aweme/i.test(t),c=r&&/Weibo/i.test(t),m=!d&&!l&&!c&&!u&&/Safari|Macintosh/i.test(t),p=/Firefox/.test(t);return{ua:t,mobile:r,android:i,ios:n,mac:a,wx:l,chrome:d,iphone:o,ipad:n&&!o,safari:m,tiktok:u,weibo:c,win:/windows|win32|win64|wow32|wow64/.test(s),linux:/linux/.test(s),firefox:p}};function l(){var e;if(globalThis.$AFFINE_SETUP)return;let t={isLinux:!1,isMacOs:!1,isSafari:!1,isWindows:!1,isFireFox:!1,isChrome:!1,isIOS:!1,isPwa:!1,isMobile:!1,isSelfHosted:!1,publicPath:"/",subPath:""};if(globalThis.navigator){let e=new UaHelper(globalThis.navigator);(t={...t,isMobile:e.isMobile,isLinux:e.isLinux,isMacOs:e.isMacOs,isSafari:e.isSafari,isWindows:e.isWindows,isFireFox:e.isFireFox,isChrome:e.isChrome,isIOS:e.isIOS,isPwa:e.isStandalone}).isChrome&&!t.isIOS&&(t={...t,isSafari:!1,isFireFox:!1,isChrome:!0,chromeVersion:e.getChromeVersion()})}e=t,"u"<typeof document||document.querySelectorAll("meta").forEach(t=>{if(!t.name.startsWith("env:"))return;let s=t.name.substring(4);s in e&&(e[s]="string"==typeof e[s]?t.content:JSON.parse(t.content))}),globalThis.environment=t,globalThis.$AFFINE_SETUP=!0}l(),s(24403),s(50948),s(15124),s(56291),s(60840),s(98236),s(49962),s(16858),s(81202),s(43275),s(15486),s(24751),s(66656);var d=s(92310);"u">typeof window&&(window.ResizeObserver=d.tb);var u=s(60386);new u.k("mixpanel");let c=["page","segment","module","event"];var m=s(4900),p=s(89966),f=s(61199),h=s(96540),g=s(86090);let b={init(){globalThis.SENTRY_RELEASE||(r=m.T({dsn:"",debug:!1,environment:"canary",integrations:[p.jS({useEffect:h.useEffect,useLocation:g.zy,useNavigationType:g.wQ,createRoutesFromChildren:g.AV,matchRoutes:g.ue})]}),f.Wt({distribution:"admin",appVersion:"0.27.5",editorVersion:"0.27.5"}))},enable(){r&&(r.getOptions().enabled=!0)},disable(){r&&(r.getOptions().enabled=!1)}},x=(new u.k("telemetry"),[]),y={isAuthed:!1,isSelfHosted:!1,channel:"canary",officialEndpoint:"",userProperties:{}};function w(e,t={}){let s=t.replaceUserProperties?e.userProperties??{}:{...y.userProperties,...e.userProperties};y={...y,...e,userProperties:s}}async function v(e){var t;return t=e,x.length>=500&&x.shift(),x.push(t),{queued:!0}}var j=s(41884);let S="affine_telemetry_client_id",C=(i=function(){try{return"u"<typeof localStorage?null:localStorage}catch{return null}}(),n=!!i?.getItem(S),{enabled:!0,clientStorage:i,clientId:function(e,t,s=!1){if(!t)return(0,j.Ak)();if(!s){let s=t.getItem(e);if(s)return s}let r=(0,j.Ak)();try{t.setItem(e,r)}catch{}return r}(S,i),pendingFirstVisit:!n,sessionId:0,sessionNumber:0,lastActivityMs:0,sessionStartSent:!1,engagementTrackingEnabled:!1,visibleSinceMs:null,pendingEngagementMs:0,visibilityChangeHandler:null,pageHideHandler:null,userId:void 0,userProperties:{},middlewares:new Set}),N=new u.k("telemetry"),k="affine_telemetry_session_id",U="affine_telemetry_session_number",A="affine_telemetry_session_number_current",E="affine_telemetry_last_activity_ms",$={init(){this.register({appVersion:"0.27.5",environment:"canary",editorVersion:"0.27.5",isDesktop:!1,isMobile:!1,distribution:"admin"})},register(e){C.userProperties={...C.userProperties,...e},w({userProperties:C.userProperties})},reset(){C.userId=void 0,C.userProperties={},P(Date.now(),V()),w({userId:C.userId,userProperties:C.userProperties},{replaceUserProperties:!0}),this.init()},track(e,t){if(!C.enabled)return;let s=Array.from(C.middlewares).reduce((t,s)=>s(e,t),Z(t));N.debug("track",e,s),q(M(e,s))},track_pageview(e){if(!C.enabled)return;let t=Array.from(C.middlewares).reduce((e,t)=>t("track_pageview",e),Z(e)),s="string"==typeof t?.location?t.location:H(),r=function(){try{return"u"<typeof document?void 0:document.title}catch{return}}(),i={...t,location:s,pageTitle:r??t?.pageTitle};N.debug("track_pageview",i),q(M("track_pageview",i))},middleware:e=>(C.middlewares.add(e),()=>{C.middlewares.delete(e)}),opt_out_tracking(){C.enabled=!1},opt_in_tracking(){C.enabled=!0},has_opted_in_tracking:()=>C.enabled,has_opted_out_tracking:()=>!C.enabled,identify(e){C.userId=e?String(e):void 0,w({userId:C.userId})},get people(){return{set:e=>{C.userProperties={...C.userProperties,...e},w({userProperties:C.userProperties})}}}};function q(e){for(let t of e)v(t).catch(e=>{N.error(`failed to send telemetry event ${t.eventName}`,e)})}function M(e,t,s={}){let r=s.now??Date.now(),{sessionId:i,sessionNumber:n,preEvents:a}=function(e){let t=V();if(t){let s=T(t,k),r=T(t,E);s&&r&&!(e-r>18e5)?(C.sessionId=s,C.sessionNumber=function(e,t){let s=T(e,A);if(s)return s;let r=t?T(t,U)??1:C.sessionNumber||1;return O(e,A,r),t&&!T(t,U)&&O(t,U,r),r}(t,C.clientStorage),z(e,t)):P(e,t)}else C.sessionId&&C.lastActivityMs&&!(e-C.lastActivityMs>18e5)?(C.lastActivityMs=e,C.sessionNumber||(C.sessionNumber=1)):P(e,null);let s=[];return C.pendingFirstVisit&&(C.pendingFirstVisit=!1,s.push(D("first_visit",I({},C.sessionId,C.sessionNumber,1)))),C.sessionStartSent||(C.sessionStartSent=!0,s.push(D("session_start",I({},C.sessionId,C.sessionNumber,1)))),{sessionId:C.sessionId,sessionNumber:C.sessionNumber,preEvents:s}}(r);return[...a,D(e,I(t,i,n,s.engagementMs??L(r)))]}function I(e,t,s,r){let i={...e};return Number.isFinite(t)&&t>0&&(i.session_id=t),Number.isFinite(s)&&s>0&&(i.session_number=s),Number.isFinite(r)&&(i.engagement_time_msec=r),i}function P(e,t){C.sessionId=Math.floor(e/1e3),C.sessionNumber=function(e,t){if(!e){let e=(C.sessionNumber||0)+1;return O(t,A,e),e}let s=(T(e,U)??0)+1;return O(e,U,s),O(t,A,s),s}(C.clientStorage,t),z(e,t),O(t,k,C.sessionId),C.sessionStartSent=!1,F(e)}function z(e,t){C.lastActivityMs=e,O(t,E,e)}function L(e){var t;t=e,!C.engagementTrackingEnabled&&"u">typeof document&&(C.engagementTrackingEnabled=!0,F(t),C.visibilityChangeHandler=()=>{let e=Date.now();null!==C.visibleSinceMs&&(C.pendingEngagementMs+=e-C.visibleSinceMs),C.visibleSinceMs=R()?e:null,R()||_(e)},document.addEventListener("visibilitychange",C.visibilityChangeHandler),"u">typeof window&&(C.pageHideHandler=()=>{_(Date.now())},window.addEventListener("pagehide",C.pageHideHandler))),null!==C.visibleSinceMs&&(C.pendingEngagementMs+=e-C.visibleSinceMs,C.visibleSinceMs=e);let s=Math.max(0,Math.round(C.pendingEngagementMs));return C.pendingEngagementMs=0,s}function F(e){C.pendingEngagementMs=0,C.visibleSinceMs=R()?e:null}function _(e){if(!C.enabled)return;let t=L(e);t<=0||q(M("user_engagement",{engagement_time_msec:t},{now:e,engagementMs:t}))}function R(){try{return"u">typeof document&&"hidden"!==document.visibilityState}catch{return!0}}function T(e,t){if(!e)return;let s=e.getItem(t);if(!s)return;let r=Number(s);if(Number.isFinite(r)&&!(r<=0))return r}function O(e,t,s){if(e)try{e.setItem(t,String(s))}catch{return}}function D(e,t){return{schemaVersion:1,eventName:e,params:t,userId:C.userId,userProperties:C.userProperties,clientId:C.clientId,sessionId:C.sessionId,eventId:(0,j.Ak)(),timestampMicros:1e3*Date.now(),context:{appVersion:"0.27.5",editorVersion:"0.27.5",environment:"canary",distribution:"admin",channel:"canary",isDesktop:!1,isMobile:!1,locale:function(){try{return"u"<typeof navigator?void 0:navigator.language}catch{return}}(),timezone:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{return}}(),url:H(),referrer:function(){try{return"u"<typeof document?void 0:document.referrer}catch{return}}()}}}function Z(e){if(e)return e}function V(){try{return"u"<typeof sessionStorage?null:sessionStorage}catch{return null}}function H(){try{return"u"<typeof location?void 0:location.href}catch{return}}(function e(t,s){return new Proxy({},{get(r,i){if("string"==typeof i&&"$$typeof"!==i)if("event"===c[t])return e=>{((e,t)=>{$.track(e,t)})(i,{...s,..."string"==typeof e?{arg:e}:e})};else{let n=r[i];return n||(n=e(t+1,"$"===i?{...s}:{...s,[c[t]]:i}),r[i]=n),n}}})})(0,{});var W=s(52035),B=s(84929),Q=s(79093);l(),new u.k("affine:settings");let K="affine-settings",G=(0,B.tG)(K,{clientBorder:!1,windowFrameStyle:"frameless",enableBlurBackground:!1,enableNoisyBackground:!0,autoCheckUpdate:!0,autoDownloadUpdate:!0,enableTelemetry:!0,showLinkedDocInSidebar:!0,disableImageAntialiasing:!1},void 0,{getOnInit:!0}),J=(0,Q.$)(e=>{e(G)});if((0,W.eU)(e=>(e(J),e(G)),(e,t,s)=>{t(G,e=>{let t="function"==typeof s?s(e):s;return{...e,...t}})}),$.init(),b.init(),"u">typeof localStorage){let e=!0,t=localStorage.getItem(K);t&&(e=JSON.parse(t).enableTelemetry),e||(b.disable(),$.opt_out_tracking())}var Y=s(5338),X=s(78714),ee=s(64721);let et=({...e})=>{let{theme:t="system"}=(0,X.D)();return(0,a.jsx)(ee.l$,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast rounded-md group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-menu",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var es=s(28812),er=s(39277),ei=s(92177);let en=["dark","light"],ea=({children:e})=>(0,a.jsx)(X.N,{themes:en,enableSystem:!0,defaultTheme:"system",children:e});var eo=s(95514),el=s(60096);h.forwardRef(({className:e,sideOffset:t=4,...s},r)=>(0,a.jsx)(el.UC,{ref:r,sideOffset:t,className:(0,eo.cn)("z-50 overflow-hidden rounded-md border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-menu animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s})).displayName=el.UC.displayName;var ed=s(98044),eu=s(4811);let ec=({className:e,...t})=>(0,a.jsx)(eu.YZ,{className:(0,eo.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",e),...t}),em=eu.Zk;var ep=s(69961),ef=s(29669),eh=s(35970),eg=s(52370),eb=s(22732),ex=s(48697);let ey=eg.bL,ew=eg.l9;eg.bm;let ev=eg.ZL,ej=h.forwardRef(({className:e,...t},s)=>(0,a.jsx)(eg.hJ,{className:(0,eo.cn)("fixed inset-0 z-50 bg-foreground/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:s}));ej.displayName=eg.hJ.displayName;let eS=(0,eb.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),eC=h.forwardRef(({side:e="right",className:t,children:s,withoutCloseButton:r,...i},n)=>(0,a.jsxs)(ev,{children:[(0,a.jsx)(ej,{}),(0,a.jsxs)(eg.UC,{ref:n,className:(0,eo.cn)(eS({side:e}),t),...i,children:[s,!r&&(0,a.jsxs)(eg.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,a.jsx)(ex.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]}));eC.displayName=eg.UC.displayName;let eN=({className:e,...t})=>(0,a.jsx)("div",{className:(0,eo.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...t});eN.displayName="SheetHeader";let ek=h.forwardRef(({className:e,...t},s)=>(0,a.jsx)(eg.hE,{ref:s,className:(0,eo.cn)("text-lg font-semibold text-foreground",e),...t}));ek.displayName=eg.hE.displayName;let eU=h.forwardRef(({className:e,...t},s)=>(0,a.jsx)(eg.VY,{ref:s,className:(0,eo.cn)("text-sm text-muted-foreground",e),...t}));eU.displayName=eg.VY.displayName;let eA=()=>(0,a.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M18.6172 16.2657C18.314 15.7224 17.8091 14.8204 17.3102 13.9295C17.1589 13.6591 17.0086 13.3904 16.8644 13.1326C16.5679 12.6025 16.2978 12.1191 16.1052 11.7741C14.7688 9.38998 12.1376 4.66958 10.823 2.33541C10.418 1.68481 9.47943 1.73636 9.13092 2.4101C8.73553 3.1175 8.3004 3.89538 7.84081 4.71744C7.69509 4.97831 7.54631 5.24392 7.396 5.51268C5.48122 8.93556 3.24035 12.9423 1.64403 15.7961C1.5625 15.9486 1.41067 16.1974 1.33475 16.362C1.20176 16.6591 1.22775 17.0294 1.39538 17.304C1.58441 17.629 1.93802 17.8073 2.29927 17.7889C2.73389 17.7889 3.65561 17.7884 4.84738 17.7889C5.13016 17.7889 5.42823 17.7889 5.73853 17.7889C9.88246 17.7889 16.2127 17.7915 17.7663 17.7889C18.5209 17.7905 18.9942 16.9363 18.6182 16.2652L18.6172 16.2657ZM9.69699 13.2342L8.93424 11.8704C8.80024 11.6305 8.96787 11.3307 9.23588 11.3307H10.7614C11.0299 11.3307 11.1975 11.6305 11.063 11.8704L10.3003 13.2342C10.1663 13.474 9.83099 13.474 9.69648 13.2342H9.69699ZM8.41912 10.6943C8.35594 10.5281 8.30142 10.3593 8.25658 10.1878L10.7802 10.6943H8.41912ZM9.57165 14.2824C9.46414 14.4223 9.3495 14.5553 9.22823 14.6816L8.39109 12.1723L9.57114 14.2824H9.57165ZM12.0061 11.458C12.1768 11.4843 12.346 11.5206 12.5121 11.5658L10.8256 13.5687L12.0061 11.458ZM8.10117 9.33318C8.07417 9.07967 8.06245 8.82353 8.06347 8.56687L11.3962 10.2452L8.10067 9.33371L8.10117 9.33318ZM7.70579 11.8456L8.58828 15.2459C8.38905 15.3969 8.18015 15.5357 7.96411 15.663L7.70528 11.8456H7.70579ZM13.3069 11.8546C13.5332 11.9571 13.7538 12.075 13.9688 12.2043L10.8944 14.345L13.3069 11.8546ZM8.1399 7.48447C8.20104 7.01847 8.2953 6.55932 8.40943 6.1191L13.4725 10.6623L8.14041 7.48447H8.1399ZM7.01793 16.1369C6.59656 16.3152 6.16449 16.4603 5.73802 16.5781L7.01793 9.78129V16.1369ZM14.8386 12.8134C15.1988 13.1011 15.5371 13.4151 15.8494 13.737L9.50643 15.9912L14.8386 12.8134ZM10.2203 3.56456C11.1537 5.23655 12.509 7.66118 13.8002 9.96905L8.97959 4.99304C9.26288 4.48707 9.5314 4.00688 9.77902 3.56351C9.87736 3.38837 10.1219 3.38837 10.2203 3.56351V3.56456ZM2.69109 16.2358C2.95655 15.7629 3.32137 15.1144 3.40238 14.9651C4.17074 13.5913 5.20557 11.7415 6.27454 9.8302L4.50906 16.6307C3.87674 16.6307 3.33156 16.6307 2.91171 16.6307C2.71555 16.6307 2.59275 16.4114 2.69109 16.2363V16.2358ZM17.0871 16.6318C15.6151 16.6318 12.7572 16.6318 9.91965 16.6318L16.5083 14.8094C16.8537 15.4268 17.1304 15.9212 17.3077 16.2379C17.406 16.413 17.2832 16.6318 17.0876 16.6318H17.0871Z",fill:"currentColor"})});var eE=s(623),e$=s(22864),eq=s(96166);let eM=({icon:e,label:t,to:s,isCollapsed:r})=>{let i=({isActive:e})=>(0,eo.cn)("group inline-flex h-9 items-center gap-2 rounded-lg text-sm font-medium transition-all duration-150","text-sidebar-foreground-secondary hover:bg-sidebar-hover hover:text-sidebar-foreground",r?"w-9 justify-center px-0":"w-full justify-start px-2",e&&"bg-sidebar-active text-sidebar-foreground shadow-sm");return r?(0,a.jsx)(g.k2,{to:s,className:i,children:e}):(0,a.jsxs)(g.k2,{to:s,className:i,children:[(0,a.jsx)("span",{className:"flex items-center p-0.5",children:e}),(0,a.jsx)("span",{className:"truncate",children:t})]})},eI=()=>{let e=(0,ed.LN)(),t=e?.availableUpgrade,s=e?.version,r=(0,h.useCallback)(()=>{t&&window.open(t.url,"_blank")},[t]);return t?(0,a.jsx)(eh.$,{variant:"outline",className:"flex w-full items-center justify-center gap-1 overflow-hidden px-2 py-1.5 text-xs font-medium",onClick:r,title:`New Version ${t.version} Available`,children:(0,a.jsxs)("span",{className:"overflow-hidden text-ellipsis space-x-1",children:[(0,a.jsx)("span",{children:"New Version"}),(0,a.jsx)("span",{children:t.version}),(0,a.jsx)("span",{children:"Available"})]})}):(0,a.jsxs)("div",{className:"inline-flex flex-nowrap items-center justify-between gap-1 border-t border-border px-2 pt-2 text-xs text-muted-foreground",children:[(0,a.jsx)("span",{children:"ServerVersion"}),(0,a.jsx)("span",{className:"overflow-hidden text-ellipsis whitespace-nowrap",title:s,children:`v${s}`})]})},eP=({isCollapsed:e})=>(0,a.jsx)(eM,{to:es.bw.admin.settings.index,icon:(0,a.jsx)(eE.Zes,{fontSize:20}),label:"Settings",isCollapsed:e});var ez=s(76045),eL=s(84181),eF=s(68397),e_=s(94471);let eR="inline-flex h-5 items-center rounded-md border border-border/60 bg-chip-blue px-2 py-0.5 text-xxs font-medium text-chip-text",eT=({name:e,email:t,avatarUrl:s})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(ez.eu,{className:"w-8 h-8",children:[(0,a.jsx)(ez.BK,{src:s??void 0}),(0,a.jsx)(ez.q5,{children:(0,a.jsx)(eF.A,{size:32})})]}),(0,a.jsxs)("div",{className:"flex flex-col font-medium gap-1",children:[e??t.split("@")[0],(0,a.jsx)("span",{className:eR,children:"Admin"})]})]}),eO=({name:e,email:t})=>{if(e)return(0,a.jsx)("span",{className:"max-w-[120px] overflow-hidden text-ellipsis text-sm whitespace-nowrap",title:e,children:e});let s=t?.split("@")[0]??"";return(0,a.jsx)("span",{className:"max-w-[120px] overflow-hidden text-ellipsis text-sm whitespace-nowrap",title:s,children:s})};function eD({isCollapsed:e}){let t=(0,ed.iZ)(),s=(0,ed.B3)(),r=(0,h.useCallback)(()=>{(0,e_.Q)("/api/auth/sign-out",{method:"POST"}).then(()=>(ee.oR.success("Logged out successfully"),s())).catch(e=>{ee.oR.error(`Failed to logout: ${e.message}`)})},[s]);return e?(0,a.jsxs)(eL.rI,{children:[(0,a.jsx)(eL.ty,{asChild:!0,children:(0,a.jsx)(eh.$,{variant:"ghost",className:"h-9 w-9 rounded-lg",size:"icon",children:(0,a.jsxs)(ez.eu,{className:"h-5 w-5",children:[(0,a.jsx)(ez.BK,{src:t?.avatarUrl??void 0}),(0,a.jsx)(ez.q5,{children:(0,a.jsx)(eF.A,{size:24})})]})})}),(0,a.jsxs)(eL.SQ,{align:"end",side:"right",children:[(0,a.jsx)(eL.lp,{className:"flex items-center gap-2",children:t?(0,a.jsx)(eT,{email:t.email,name:t.name,avatarUrl:t.avatarUrl}):null}),(0,a.jsx)(eL.mB,{}),(0,a.jsx)(eL._2,{onSelect:r,children:"Logout"})]})]}):(0,a.jsxs)("div",{className:"flex items-center justify-between px-1 py-3",children:[(0,a.jsxs)("div",{className:"flex min-w-0 items-center gap-2 font-medium",children:[(0,a.jsxs)(ez.eu,{className:"h-5 w-5",children:[(0,a.jsx)(ez.BK,{src:t?.avatarUrl??void 0}),(0,a.jsx)(ez.q5,{children:(0,a.jsx)(eF.A,{size:24})})]}),(0,a.jsx)(eO,{name:t?.name,email:t?.email}),(0,a.jsx)("span",{className:eR,children:"Admin"})]}),(0,a.jsxs)(eL.rI,{children:[(0,a.jsx)(eL.ty,{asChild:!0,children:(0,a.jsx)(eh.$,{variant:"ghost",className:"ml-2 h-7 w-7 rounded-lg p-0",size:"icon",children:(0,a.jsx)(eE.FHP,{fontSize:20})})}),(0,a.jsxs)(eL.SQ,{align:"end",side:"right",children:[(0,a.jsx)(eL.lp,{className:"flex items-center gap-2",children:t?(0,a.jsx)(eT,{email:t.email,name:t.name,avatarUrl:t.avatarUrl}):null}),(0,a.jsx)(eL.mB,{}),(0,a.jsx)(eL._2,{onSelect:r,children:"Logout"})]})]})]})}function eZ({isCollapsed:e=!1}){return(0,a.jsxs)("div",{className:(0,eo.cn)("flex h-full flex-grow flex-col justify-between gap-4 py-2",e&&"overflow-visible"),children:[(0,a.jsxs)("nav",{className:(0,eo.cn)("flex flex-1 flex-col gap-1 overflow-x-hidden overflow-y-auto px-2",e&&"items-center px-0 gap-1 overflow-visible"),children:[environment.isSelfHosted?null:(0,a.jsx)(eM,{to:es.bw.admin.dashboard,icon:(0,a.jsx)(e$.A,{size:18}),label:"Dashboard",isCollapsed:e}),(0,a.jsx)(eM,{to:es.bw.admin.accounts,icon:(0,a.jsx)(eE.JMb,{fontSize:20}),label:"Accounts",isCollapsed:e}),environment.isSelfHosted?null:(0,a.jsx)(eM,{to:es.bw.admin.workspaces,icon:(0,a.jsx)(eq.A,{size:18}),label:"Workspaces",isCollapsed:e}),(0,a.jsx)(eP,{isCollapsed:e}),(0,a.jsx)(eM,{to:es.bw.admin.about,icon:(0,a.jsx)(eE.Q$E,{fontSize:20}),label:"About",isCollapsed:e})]}),(0,a.jsxs)("div",{className:(0,eo.cn)("flex flex-col gap-2 overflow-hidden px-2",e&&"items-center px-0 gap-1"),children:[(0,a.jsx)(eD,{isCollapsed:e}),e?null:(0,a.jsx)(eI,{})]})]})}var eV=s(56391);function eH({children:e}){let[t,s]=(0,h.useState)(null),[r,i]=(0,h.useState)(null),[n,o]=(0,h.useState)(!1),[l,d]=(0,h.useState)(!1),[u,c]=(0,h.useState)(!1),m=(0,h.useRef)(null),p=(0,h.useRef)(null),f=(0,g.zy)(),b=(0,h.useCallback)(()=>{p.current?.getSize()===0&&p.current?.resize(30),o(!0)},[p]),x=(0,h.useCallback)(()=>{p.current?.getSize()!==0&&p.current?.resize(0),o(!1)},[p]),y=(0,h.useCallback)(()=>{b(),p.current?.expand(),o(!0)},[b]),w=(0,h.useCallback)(()=>{x(),p.current?.collapse(),o(!1)},[x]),v=(0,h.useCallback)(()=>p.current?.isCollapsed()?y():w(),[y,w]),j=(0,h.useCallback)(()=>{m.current?.getSize()===0&&m.current?.resize(30),d(!0)},[m]),S=(0,h.useCallback)(()=>{m.current?.getSize()!==0&&m.current?.resize(0),d(!1)},[m]),C=(0,h.useCallback)(e=>{c(!1),s(e)},[s,c]),N=(0,h.useCallback)(()=>{j(),m.current?.expand(),d(!0)},[j]),k=(0,h.useCallback)(()=>{S(),m.current?.collapse(),d(!1),c(!1)},[S,c]),U=(0,h.useCallback)(()=>m.current?.isCollapsed()?N():k(),[k,N]);(0,h.useEffect)(()=>{C(null),k()},[f.pathname,k,C]);let A=(0,h.useMemo)(()=>({leftPanel:{isOpen:n,panelContent:r,setPanelContent:i,togglePanel:v,openPanel:y,closePanel:w},rightPanel:{isOpen:l,panelContent:t,setPanelContent:C,togglePanel:U,openPanel:N,closePanel:k,hasDirtyChanges:u,setHasDirtyChanges:c}}),[w,k,C,n,r,y,N,l,t,u,i,c,v,U]);return(0,a.jsx)(eV.GM.Provider,{value:A,children:(0,a.jsx)(el.Kq,{delayDuration:0,children:(0,a.jsx)("div",{className:"flex h-dvh w-full overflow-hidden",children:(0,a.jsxs)(ec,{direction:"horizontal",children:[(0,a.jsx)(eW,{panelRef:p,onExpand:b,onCollapse:x}),(0,a.jsx)(em,{id:"1",order:1,minSize:50,defaultSize:50,children:e}),(0,a.jsx)(eB,{panelRef:m,onExpand:j,onCollapse:S})]})})})})}let eW=({panelRef:e,onExpand:t,onCollapse:s})=>{let r=(0,ed.Ub)("(max-width: 768px)"),i=e.current?.isCollapsed();return r?(0,a.jsxs)(ey,{children:[(0,a.jsx)(ew,{asChild:!0,children:(0,a.jsx)(eh.$,{variant:"ghost",className:"fixed left-4 top-4 z-20 h-8 w-8 rounded-lg border border-border bg-background/95 p-0 shadow-1 backdrop-blur",size:"icon",children:(0,a.jsx)(ef.A,{size:20})})}),(0,a.jsxs)(eN,{className:"hidden",children:[(0,a.jsx)(ek,{children:"AFFiNE"}),(0,a.jsx)(eU,{children:"Admin panel for managing accounts, AI, config, and settings"})]}),(0,a.jsx)(eC,{side:"left",className:"w-64 border-r border-border/60 bg-sidebar-bg p-0",withoutCloseButton:!0,children:(0,a.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,a.jsxs)("div",{className:(0,eo.cn)("flex h-14 items-center gap-2 border-b border-border px-4 text-base font-semibold text-sidebar-foreground"),children:[(0,a.jsx)(eA,{}),"AFFiNE"]}),(0,a.jsx)(ep.w,{}),(0,a.jsx)(eZ,{})]})})]}):(0,a.jsx)(em,{id:"0",order:0,ref:e,defaultSize:15,maxSize:15,minSize:15,collapsible:!0,collapsedSize:2,onExpand:t,onCollapse:s,className:(0,eo.cn)(i?"min-w-[57px] max-w-[57px]":"min-w-56 max-w-56","h-dvh overflow-visible border-r border-border/60 bg-sidebar-bg"),children:(0,a.jsxs)("div",{className:"flex h-full max-w-56 flex-col",children:[(0,a.jsxs)("div",{className:(0,eo.cn)("flex h-14 items-center px-4 text-base font-semibold text-sidebar-foreground",i&&"justify-center px-2"),children:[(0,a.jsx)("span",{className:(0,eo.cn)("flex items-center p-0.5 mr-2",i&&"justify-center px-2 mr-0"),children:(0,a.jsx)(eA,{})}),!i&&"AFFiNE"]}),(0,a.jsx)(eZ,{isCollapsed:i})]})})},eB=({panelRef:e,onExpand:t,onCollapse:s})=>{let r=(0,ed.Ub)("(max-width: 768px)"),{panelContent:i,isOpen:n}=(0,eV.oj)(),o=(0,h.useCallback)(e=>{e?t():s()},[t,s]);return r?(0,a.jsxs)(ey,{open:n,onOpenChange:o,children:[(0,a.jsxs)(eN,{className:"hidden",children:[(0,a.jsx)(ek,{children:"Right Panel"}),(0,a.jsx)(eU,{children:"For displaying additional information"})]}),(0,a.jsx)(eC,{side:"right",className:"border-l border-border/60 bg-background p-0",withoutCloseButton:!0,children:(0,a.jsx)("div",{className:"h-full overflow-y-auto",children:i})})]}):(0,a.jsx)(em,{id:"2",order:2,ref:e,defaultSize:0,maxSize:20,collapsible:!0,collapsedSize:0,onExpand:t,onCollapse:s,className:"max-w-96 border-l border-border/60 bg-background",children:(0,a.jsx)("div",{className:"h-full overflow-y-auto",children:i})})},eQ=(0,es.RZ)(()=>Promise.all([s.e(2440),s.e(6069),s.e(6143),s.e(1171),s.e(1689),s.e(157),s.e(295),s.e(1671),s.e(5343)]).then(s.bind(s,23655))),eK=(0,es.RZ)(()=>Promise.all([s.e(2440),s.e(6069),s.e(9139),s.e(5070),s.e(948),s.e(157),s.e(4088),s.e(295),s.e(7238),s.e(8833),s.e(6556),s.e(1671),s.e(1484)]).then(s.bind(s,6125))),eG=(0,es.RZ)(()=>Promise.all([s.e(905),s.e(2440),s.e(6069),s.e(9139),s.e(6987),s.e(5730),s.e(1789),s.e(2948),s.e(2324),s.e(4702),s.e(8190),s.e(7107),s.e(9944),s.e(9510),s.e(6788),s.e(2520),s.e(8636),s.e(8185),s.e(1239),s.e(1420),s.e(3196),s.e(6458),s.e(948),s.e(4088),s.e(8833),s.e(8057),s.e(1606),s.e(1274)]).then(s.bind(s,92917))),eJ=(0,es.RZ)(()=>Promise.all([s.e(2440),s.e(6069),s.e(9139),s.e(5070),s.e(948),s.e(157),s.e(4088),s.e(295),s.e(7238),s.e(8833),s.e(6556),s.e(1606),s.e(30)]).then(s.bind(s,15644))),eY=(0,es.RZ)(()=>Promise.all([s.e(2440),s.e(6069),s.e(948),s.e(960),s.e(9607)]).then(s.bind(s,32402))),eX=(0,es.RZ)(()=>Promise.all([s.e(1191),s.e(9232),s.e(6105),s.e(6971),s.e(2440),s.e(6069),s.e(9139),s.e(2487),s.e(8200),s.e(2554),s.e(7914),s.e(5939),s.e(4445),s.e(6310),s.e(5094),s.e(1554),s.e(4776),s.e(5398),s.e(7227),s.e(5420),s.e(9669),s.e(5051),s.e(1690),s.e(4922),s.e(948),s.e(157),s.e(4088),s.e(7238),s.e(8057),s.e(960),s.e(6929)]).then(s.bind(s,69356))),e0=(0,es.RZ)(()=>Promise.all([s.e(2440),s.e(157),s.e(295),s.e(5550)]).then(s.bind(s,99667))),e1=window.SENTRY_RELEASE?(0,er.PU)(g.BV):g.BV;function e5(){let e=(0,ed.iZ)();return((0,h.useEffect)(()=>{e&&!(0,ed.qc)(e)&&ee.oR.error("You are not an admin, please login the admin account.")},[e]),e&&(0,ed.qc)(e))?(0,a.jsx)(eH,{children:(0,a.jsx)(g.sv,{})}):(0,a.jsx)(g.C5,{to:"/admin/auth"})}function e9(){let e=(0,ed.LN)(),t=(0,g.zy)();return e.initialized||"/admin/setup"===t.pathname?/^\/admin\/?$/.test(t.pathname)?(0,a.jsx)(g.C5,{to:environment.isSelfHosted?es.bw.admin.accounts:es.bw.admin.dashboard}):(0,a.jsx)(g.sv,{}):(0,a.jsx)(g.C5,{to:"/admin/setup"})}(0,Y.createRoot)(document.getElementById("app")).render((0,a.jsx)(()=>(0,a.jsx)(ea,{children:(0,a.jsxs)(el.Kq,{children:[(0,a.jsx)(ei.BE,{value:{revalidateOnFocus:!1,revalidateOnMount:!1},children:(0,a.jsx)(g.Kd,{basename:environment.subPath,children:(0,a.jsx)(e1,{children:(0,a.jsxs)(g.qh,{path:es.bw.admin.index,element:(0,a.jsx)(e9,{}),children:[(0,a.jsx)(g.qh,{path:es.bw.admin.auth,element:(0,a.jsx)(e0,{})}),(0,a.jsx)(g.qh,{path:es.bw.admin.setup,element:(0,a.jsx)(eQ,{})}),(0,a.jsxs)(g.qh,{element:(0,a.jsx)(e5,{}),children:[(0,a.jsx)(g.qh,{path:es.bw.admin.dashboard,element:environment.isSelfHosted?(0,a.jsx)(g.C5,{to:es.bw.admin.accounts,replace:!0}):(0,a.jsx)(eG,{})}),(0,a.jsx)(g.qh,{path:es.bw.admin.accounts,element:(0,a.jsx)(eK,{})}),(0,a.jsx)(g.qh,{path:es.bw.admin.workspaces,element:environment.isSelfHosted?(0,a.jsx)(g.C5,{to:es.bw.admin.accounts,replace:!0}):(0,a.jsx)(eJ,{})}),(0,a.jsx)(g.qh,{path:es.bw.admin.ai,element:(0,a.jsx)(g.C5,{to:es.bw.admin.settings.index,replace:!0})}),(0,a.jsx)(g.qh,{path:es.bw.admin.about,element:(0,a.jsx)(eY,{})}),(0,a.jsx)(g.qh,{path:es.bw.admin.settings.index,element:(0,a.jsx)(eX,{})})]})]})})})}),(0,a.jsx)(et,{})]})}),{}))}},function(e){e.O(0,[1191,4014,6821,9341,9474],function(){return e(e.s=19902)}),e.O()}]);
//# sourceMappingURL=index.b084d534.js.map