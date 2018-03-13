function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout(string))
}

function logWhisper(string){
  console.log(whisper(string))
}

function sayHiToGrandma(string){
  var toLowerCase = whisper(string)
  if(toLowerCase == string){
    return ("I can't hear you!")
  }else{
    return ("I can hear u!")
  }
}
  
  