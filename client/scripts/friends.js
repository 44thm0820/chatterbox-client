var Friends = {


  toggleStatus: function(friend) {
    if (Friends[friend]) {
      Friends[friend] = false;
    } else {
      Friends[friend] = true;
    }
  }
};