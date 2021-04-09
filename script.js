let idPersonA = document.getElementById('id-person-a');
let personA = document.getElementById('person-a');
let idPersonB = document.getElementById('id-person-b');
let personB = document.getElementById('person-b');
let chatA =  document.getElementById('chat-a')
let chatB =  document.getElementById('chat-b')
let arrChat = []

personA.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        arrChat.push({id : idPersonA.value, chat: personA.value })

        chatA.innerHTML = fetchAllChatA(arrChat)
        chatB.innerHTML = fetchAllChatB(arrChat)
        chatA.scrollTop = chatA.scrollHeight;
        chatB.scrollTop = chatB.scrollHeight;
        personA.value = ''
    }
    
})

function fetchAllChatA(chats){
    let text =''
    for(let i = 0;i<chats.length;i++){
        
        if(chats[i].id === 'Aku'){
            text+= `<div class="bubble left boxleft"><span>${chats[i].id}</span><br/>${chats[i].chat}<br/></div>`
        }else{
            text+= `<div class="bubble right boxright"><span>${chats[i].id}</span><br/>${chats[i].chat}<br/></div>`
        }
       
    }

    return text
   
}

personB.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        arrChat.push({id : idPersonB.value, chat: personB.value })
        
        chatB.innerHTML = fetchAllChatB(arrChat)
        chatA.innerHTML = fetchAllChatA(arrChat)
        chatA.scrollTop = chatA.scrollHeight;
        chatB.scrollTop = chatB.scrollHeight;
        
        personB.value = ''
    }
    
})


function fetchAllChatB(chats){
    let text =''
    for(let i = 0;i<chats.length;i++){
        
        if(chats[i].id === 'Dia'){
            text+= `<div class="bubble left boxleft"><span>${chats[i].id}</span><br/>${chats[i].chat}<br/></div>`
        }else{
            text+= `<div class="bubble right boxright"><span>${chats[i].id}</span><br/>${chats[i].chat}<br/></div>`
        }
       
    }

    return text
   
}
