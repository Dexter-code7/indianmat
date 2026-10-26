import{r as s,d as N,j as e}from"./react-CSuLSDWO.js";import{u as w}from"./redux-CzkoW_YD.js";import{A as x,s as g}from"./index-C6cF6_z-.js";import{Q as y}from"./vendor-ETSiClqV.js";import{k as S,i as P,s as C}from"./ui-D06s91IP.js";const D=({name:o,message:h,status:c,notificationTime:l,viewProfile:p,isAccepted:f,profileImage:d,isPremium:u,onClickFucntion:n,onClickNotificationRead:m,onDeleteNotification:i})=>e.jsxs("div",{className:`
      flex items-center justify-between p-4 mb-4 rounded-xl 
      ${c===1?"bg-[#e6a4b4]":"bg-gray-50"}
      hover:shadow-lg hover:shadow-[#c4a45633] 
      active:shadow-md active:shadow-[#c4a45622]
      transition-all duration-300 ease-in-out
      active:bg-opacity-90 active:transform active:scale-[0.99]
      cursor-pointer
    `,onClick:m,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("div",{className:"w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden",children:d?e.jsx("img",{src:d,alt:"Profile",className:"w-full h-full object-cover"}):e.jsx(S,{className:"text-gray-600"})}),u&&e.jsx(P,{className:"absolute -top-1 -right-3 w-5 h-5 text-yellow-400"})]}),e.jsxs("div",{className:"ml-4",children:[e.jsxs("p",{className:"text-sm text-gray-800",children:[o," has ",h]}),e.jsx("p",{className:"text-xs text-gray-500",children:l})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{className:`\r
          text-sm text-[#c4a456] font-semibold \r
          hover:text-[#9a2143] \r
          transition-colors duration-300\r
          relative\r
          after:content-[''] after:absolute after:-bottom-1 after:left-0 \r
          after:w-full after:h-0.5 after:bg-[#9a2143]\r
          after:transform after:scale-x-0 after:transition-transform after:duration-300\r
          hover:after:scale-x-100\r
        `,onClick:r=>{r.stopPropagation(),n()},children:"VIEW PROFILE"}),e.jsx("button",{className:`\r
          text-sm text-red-500 font-semibold\r
          hover:text-red-700\r
          transition-colors duration-300\r
          relative\r
          after:content-[''] after:absolute after:-bottom-1 after:left-0\r
          after:w-full after:h-0.5 after:bg-red-700\r
          after:transform after:scale-x-0 after:transition-transform after:duration-300\r
          hover:after:scale-x-100\r
        `,onClick:r=>{r.stopPropagation(),i()},children:e.jsx(C,{size:18})})]})]}),F=()=>{const o=w(a=>a.activeUser.userId),[h,c]=s.useState(!0),[l,p]=s.useState(1);s.useState(1),s.useState(1);const[f,d]=s.useState(9),u=N(),[n,m]=s.useState(),[i,r]=s.useState(!1);s.useEffect(()=>{(async()=>{try{c(!0);const[t]=await Promise.all([x.GetMethodFn(`/get-notifications-for-web/${o}?pageSize=${f}&page=${l}`)]);m(t.data.data)}catch(t){console.error("Error:",t)}finally{c(!1)}})()},[o,l,f,i]),s.useEffect(()=>{i&&(console.log("Status updated, fetching new data..."),r(!1))},[i]);const v=async a=>{try{const t=await x.GetMethodFn(`/update-notification-status-for-web/${o}/${a}`);(t.statusCode===1||t.status===1)&&g("success",t.message)}catch(t){console.error("Error during payment verification:",t)}finally{r(!0)}},j=async a=>{try{const t=await x.DeleteMethodFn(`/delete-notification/${o}/${a}`);(t.statusCode===1||t.status===1)&&g("success",t.message)}catch(t){console.error("Error during payment verification:",t)}finally{r(!0)}},b=a=>{console.log("Profile clicked 2024:",a),u("/profile_details",{state:{otherUserId:a}})};return e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-[#9a2143] mb-6",children:"Notifications"}),e.jsx("div",{className:"bg-white rounded-xl p-6 shadow-md",children:n&&n.length>0?n.map((a,t)=>e.jsx(D,{...a,onClickFucntion:()=>b(a.requestUserId),onClickNotificationRead:()=>v(a.objectId),onDeleteNotification:()=>j(a.objectId)},t)):e.jsx("p",{className:"text-center text-gray-500",children:"No data found"})})]}),e.jsx(y,{})]})};export{F as default};
