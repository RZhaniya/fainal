Vue.component('card',{
    template:` <div class="feature-item">
    <i v-bind:class=" 'bx bx-' +iclass" ></i>
        <p> 
            <b> 
                {{btitle}} 
            </b> 
            <br>
            {{ptitle}} 
        </p>
  </div>`,
  props:['btitle','ptitle','iclass']
})

const vue = new Vue({
    el:"#app",
    data:{
        cards:[
       { btitle:"1 Year", ptitle:"Warranty", iclass:"checkbox"},
       { btitle:"15 Days", ptitle:"Easy Return", iclass:"package"},
       { btitle:"Free", ptitle:"Shipping", iclass:"save"},
       { btitle:"24 / 7", ptitle:"Support", iclass:"support"},
        ]
    }
})