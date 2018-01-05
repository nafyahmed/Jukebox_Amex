
function deleteSong(i){
    console.log("deleting value = " + i);
    $('.song_value').eq(0).remove();
    firebase.auth().onAuthStateChanged(function(user) {
       const userRef =  firebase.database().ref().child('users');
        if (user) {
            // User is signed in.
            var user1 = firebase.auth().currentUser;
            const user = userRef.child(user1.uid);
            const songQueue = user.child('song_queue');
            songQueue.once('value').then(snapshot => {
                const updates = {};
                var val = 0;
                snapshot.forEach(function(child) {
                    if(val == 0){
               //         console.log("found at " + val);
                        //remove from backend
                        //remove from view
                        //snapshot.ref.remove();
                //        console.log("the key = " + child.key);
                        songQueue.child(child.key).remove();
                      //  $("#" + i).parent().remove();
                        //update view
                    }
                    val++;
                });
            });

        } else {
            // No user is signed in.
        }
    });
}

$(document).on("click", ".delete_button", function(){
 //   console.log("delete clicked");
    var that_ = $(this).parent();
    var currentIndex = $('.song_value').index(that_);
    $('.song_value').eq(currentIndex).remove();
  //  console.log("this = " + currentIndex);
    var val = parseInt($(this).attr('id'));
    firebase.auth().onAuthStateChanged(function(user) {
        const userRef =  firebase.database().ref().child('users');
        if (user) {
            // User is signed in.
            var user1 = firebase.auth().currentUser;
          //     console.log("THE user = " + user1.uid);
            const user = userRef.child(user1.uid);
            const songQueue = user.child('song_queue');
         //        console.log("Loaded Successfully" );

            var i = 0;
            songQueue.once('value').then(snapshot => {
                const updates = {};
      //          console.log("loading");
                snapshot.forEach(function(child) {
                    if(i == currentIndex){
                        console.log("found at " + val);
                        //remove from backend
                        //remove from view
                        //snapshot.ref.remove();
                        console.log("the key = " + child.val());
                        songQueue.child(child.key).remove();
               //         $("#" + val).parent().remove();
                        //update view
                    }
                    i++;
                });
            });
      //      console.log("done loading");

        } else {
            // No user is signed in.
        }
    });
});

$(document).on("click", "#song1", function(){
 //   console.log("added");
 //   console.log("the name = "+ $(this).parent().parent().find('.songName').html());
    var song_name = $(this).parent().parent().find('.songName').html();
    song_name = song_name.substring(1);
    //get current number of songs for new id value
    var size = $('.song_value').length;
 //   console.log("size = " + size);
    $('#song_list').append('<li class="song_value"><button class="delete_button" id="' + size + '">x</button>' + song_name + '</li>');
    //get song name

});

$(document).on("click", "#song2", function(){
  //  console.log("added");
  //  console.log("the name = "+ $(this).parent().parent().find('.songName').html());
    var song_name = $(this).parent().find('.songName').html();
    song_name = song_name.substring(1);

    //get current number of songs for new id value
    var size = $('.song_value').length;
 //   console.log("size = " + size);
    //get song name
    $('#song_list').append('<li class="song_value"><button class="delete_button" id="' + size + '">x</button>' + song_name + '</li>');
});

$(document).on("click", "#song3", function(){
  //  console.log("added");
  //  console.log("the name = "+ $(this).parent().parent().find('.songName').html());
    var song_name = $(this).parent().find('.songName').html();
    song_name = song_name.substring(1);

    //get current number of songs for new id value
    var size = $('.song_value').length;
 //   console.log("size = " + size);
    //get song name
    $('#song_list').append('<li class="song_value"><button class="delete_button" id="' + size + '">x</button>' + song_name + '</li>');
});

$(document).on("click", "#song4", function(){
 //   console.log("added");
   // console.log("the name = "+ $(this).parent().parent().find('.songName').html());
    var song_name = $(this).parent().find('.songName').html();
    song_name = song_name.substring(1);

    //get current number of songs for new id value
    var size = $('.song_value').length;
    console.log("size = " + size);
    //get song name
    $('#song_list').append('<li class="song_value"><button class="delete_button" id="' + size + '">x</button>' + song_name + '</li>');
});

$(document).on("click", "#song5", function(){
 //   console.log("added");
 //   console.log("the name = "+ $(this).parent().parent().find('.songName').html());
    var song_name = $(this).parent().find('.songName').html();
    song_name = song_name.substring(1);

    //get current number of songs for new id value
    var size = $('.song_value').length;
 //   console.log("size = " + size);
    //get song name
    $('#song_list').append('<li class="song_value"><button class="delete_button" id="' + size + '">x</button>' + song_name + '</li>');
});

$(document).on("click", "#song6", function(){
//    console.log("added");
//    console.log("the name = "+ $(this).parent().parent().find('.songName').html());
    var song_name = $(this).parent().find('.songName').html();
    song_name = song_name.substring(1);

    //get current number of songs for new id value
    var size = $('.song_value').length;
 //   console.log("size = " + size);
    //get song name
    $('#song_list').append('<li class="song_value"><button class="delete_button" id="' + size + '">x</button>' + song_name + '</li>');
});



$(document).on("click", "#play", function(){
//    console.log("clickeeed");
//    console.log("hmm = " + $(".song_value").eq(0).text());
    var check = $("#myAudio").length;
    if(check == 1){
        console.log("song is playing");
        var x = document.getElementById("myAudio");
        x.play();
    }
    else {
  //      console.log("song is not playing");
   //     var i = 0;
        if ($(".song_value").eq(0).text() == 'x7 Years') {
            console.log("7 years");
            $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/7_years.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
            var myAudio = document.getElementById('myAudio');
            myAudio.controls = false;
            myAudio.addEventListener("ended", function () {
      //          i++;
                $("#myAudio").remove();
                //remove song from backend
             //   var temp = i - 1;
              //  console.log("deleting = " + temp);
                deleteSong(0);
                //remove song from view
                if( $('.song_value').length < 1){
                    return;
                }
                else{
                    playlist(0);

                }
            });
        }
        if ($(".song_value").eq(0).text() == 'xBest of You') {
  //          console.log("Best of you");
            $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/best_of_you.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
            var myAudio = document.getElementById('myAudio');
            myAudio.controls = false;
            myAudio.addEventListener("ended", function () {
                //          i++;
                $("#myAudio").remove();
                //remove song from backend
                //   var temp = i - 1;
                //  console.log("deleting = " + temp);
                deleteSong(0);
                //remove song from view
                if( $('.song_value').length < 1){
                    return;
                }
                else{
                    playlist(0);

                }
            });
        }
        if ($(".song_value").eq(0).text() == 'xGives you Hell') {
  //          console.log("Gives you Hell");
            $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/gives_you_hell.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
            var myAudio = document.getElementById('myAudio');
            myAudio.controls = false;

            myAudio.addEventListener("ended", function () {
                //          i++;
                $("#myAudio").remove();
                //remove song from backend
                //   var temp = i - 1;
                //  console.log("deleting = " + temp);
                deleteSong(0);
                //remove song from view
                if( $('.song_value').length < 1){
                    return;
                }
                else{
                    playlist(0);

                }
            });
        }
        if ($(".song_value").eq(0).text() == 'xAccidentally in Love') {
            $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/accidentally_in_love.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
            var myAudio = document.getElementById('myAudio');
            myAudio.controls = false;

            myAudio.addEventListener("ended", function () {
                //          i++;
                $("#myAudio").remove();
                //remove song from backend
                //   var temp = i - 1;
                //  console.log("deleting = " + temp);
                deleteSong(0);
                //remove song from view
                if( $('.song_value').length < 1){
                    return;
                }
                else{
                    playlist(0);

                }
            });
        }
        if ($(".song_value").eq(0).text() == 'xAll Star') {
            $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/all_star.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
            var myAudio = document.getElementById('myAudio');
            myAudio.controls = false;

            myAudio.addEventListener("ended", function () {
                //          i++;
                $("#myAudio").remove();
                //remove song from backend
                //   var temp = i - 1;
                //  console.log("deleting = " + temp);
                deleteSong(0);
                //remove song from view
                if( $('.song_value').length < 1){
                    return;
                }
                else{
                    playlist(0);

                }
            });
        }
        if ($(".song_value").eq(0).text() == 'xBelieve') {
            $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/believe.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
            var myAudio = document.getElementById('myAudio');
            myAudio.controls = false;

            myAudio.addEventListener("ended", function () {
                //          i++;
                $("#myAudio").remove();
                //remove song from backend
                //   var temp = i - 1;
                //  console.log("deleting = " + temp);
                deleteSong(0);
                //remove song from view
                if( $('.song_value').length < 1){
                    return;
                }
                else{
                    playlist(0);

                }
            });
        }

    }
    //after the song is finished

    //remove song from list and play second song

    //if stop is played press pause temporarily

});


$(document).on("click", "#stop", function() {
   // console.log("stopped");
   // console.log($("#myAudio").length);
    var check = $("#myAudio").length;
    if(check == 1){
   //     console.log("song is playing");
        var x = document.getElementById("myAudio");
        x.pause();
    }
    else{
  //      console.log("song is not playing");
    }
});

$(document).on("click", "#next", function() {
 //   console.log("clicked");
    var check = $("#myAudio").length;
    if(check == 1){
    //    console.log("song is playing");
        var x = document.getElementById("myAudio");
        x.pause();
        $("#myAudio").remove();
        //remove song from backend
        //      var temp = i - 1;
        deleteSong(0);
        //remove song from view
        if( $('.song_value').length < 1){
            return;
        }
        else{
            if($('.song_value').length == 1){
                //            console.log("one left!!");
                playlist(0);
            }
            else {
                playlist(0);
            }
        }
    }
    else{
    //    console.log("song is not playing");
    }
});


function playlist(i){
  //  console.log("entered playlist with value = " + i);
   // console.log("the text currently equals = " + $(".song_value").eq(i).text());
    if($(".song_value").eq(i).text() == 'x7 Years'){
  //      console.log("7 years");
        $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/7_years.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
        var myAudio = document.getElementById('myAudio');
        myAudio.controls = false;

        myAudio.addEventListener("ended", function(){
            //      i++;
            $("#myAudio").remove();
            //remove song from backend
            //    var temp = i - 1;
            deleteSong(0);
            //remove song from view
            if( $('.song_value').length < 1){
         //       console.log("ended");
                return;
            }
            else{
                if($('.song_value').length == 1){
          //         console.log("one left!!");
                    playlist(0);
                }
                else {
                    playlist(0);
                }

            }
        });
    }
    if($(".song_value").eq(i).text() == 'xBest of You'){
   //     console.log("Best of you");
        $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/best_of_you.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
        var myAudio = document.getElementById('myAudio');
        myAudio.controls = false;

        myAudio.addEventListener("ended", function(){
            //       i++;
            $("#myAudio").remove();
            //remove song from backend
            //        var temp = i - 1;
            deleteSong(0);
            //remove song from view
            if( $('.song_value').length < 1){
                return;
            }
            else{
                if($('.song_value').length == 1){
         //           console.log("one left!!");
                    playlist(0);
                }
                else {
                    playlist(0);
                }
            }
        });
    }
    if($(".song_value").eq(i).text() == 'xGives you Hell'){
     //   console.log("Gives you Hell");
        $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/gives_you_hell.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
        var myAudio = document.getElementById('myAudio');
        myAudio.controls = false;

        myAudio.addEventListener("ended", function(){
            //       i++;
            $("#myAudio").remove();
            //remove song from backend
            //   var temp = i - 1;
            deleteSong(0);
            //remove song from view
            if( $('.song_value').length < 1){
                return;
            }
            else{
                if($('.song_value').length == 1){
        //            console.log("one left!!");
                    playlist(0);
                }
                else {
                    playlist(0);
                }
            }
        });
    }
    if($(".song_value").eq(i).text() == 'xAccidentally in Love'){
        $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/accidentally_in_love.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
        var myAudio = document.getElementById('myAudio');
        myAudio.controls = false;

        myAudio.addEventListener("ended", function(){
            //       i++;
            $("#myAudio").remove();
            //remove song from backend
            //      var temp = i - 1;
            deleteSong(0);
            //remove song from view
            if( $('.song_value').length < 1){
                return;
            }
            else{
                if($('.song_value').length == 1){
        //            console.log("one left!!");
                    playlist(0);
                }
                else {
                    playlist(0);
                }
            }
        });
    }
    if($(".song_value").eq(i).text() == 'xAll Star'){
        $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/all_star.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
        var myAudio = document.getElementById('myAudio');
        myAudio.controls = false;

        myAudio.addEventListener("ended", function(){
            //       i++;
            $("#myAudio").remove();
            //remove song from backend
            //   var temp = i - 1;
            deleteSong(0);
            //remove song from view
            if( $('.song_value').length < 1){
                return;
            }
            else{
                if($('.song_value').length == 1){
         //                console.log("one left!!");
                    playlist(0);
                }
                else {
                    playlist(0);
                }
            }
        });
    }
    if($(".song_value").eq(i).text() == 'xBelieve'){
        $("#audioPlayer").append('<audio id="myAudio" controls autoplay><source src="/songs/believe.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>');
        var myAudio = document.getElementById('myAudio');
        myAudio.controls = false;

        myAudio.addEventListener("ended", function(){
            //     i++;
      //      console.log("total = " + $("#" + i).length);
            $("#myAudio").remove();
            //remove song from backend
            //    var temp = i - 1;
            deleteSong(0);
            //remove song from view
            if( $('.song_value').length < 1){
                return;
            }
            else{
                if($('.song_value').length == 1){
      //              console.log("one left!!");
                    playlist(0);
                }
                else {
                    playlist(0);
                }
            }
        });
    }

}
