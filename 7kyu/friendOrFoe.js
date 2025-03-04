// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}

const friend = friends => {
    let newFriends = [];
    for(var i = 0; i < friends.length; i++){
      if( friends[i].length === 4){
        newFriends.push(friends[i]);
      }
    }
    return newFriends;
  }