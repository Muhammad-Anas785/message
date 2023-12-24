let submitBtn=document.getElementById('submitBtn');

submitBtn.addEventListener('click',putElement);

function putElement(){
    let message=document.getElementById('message').value;

    if(message==''){
        document.getElementById('error').style.display='block'
    }
    else{
        document.getElementById('currMessage').innerHTML=message;
        document.getElementById('error').style.display='none'

    }
}