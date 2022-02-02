function pass( password){
    let passw= /^[A-Za-z]\w{6,20}$/;
    if(password.value.match(passw))
    {
        alert('correct,try...')
        return true;
    }
    else{
        alert('wrong...!')
        return false;
    }
}