
var speed = 10
        // decrease value to increase speed (must be positive)
       // set pause between completion of message and beginning of following message
var pause = 2500
     // increase value to increase pause
    // set initial values
var timerID = null
var bannerRunning = false
  // create array
var ar = new Array()
// assign the strings to the array's elements
ar[0] = "Willkommen beim Vogtland Cowboy und den Ranch Linedancern !"


ar[1] = " N�chster Line-Dance-Workshop  :    "


ar[2] = "   "



ar[3] = "Der Vogtland Cowboy und die Ranch Linedancern  !"

ar[4] = " w�nschen allen  "

ar[5] = "viel Spass beim St�bern"
// assign index of current message
var message = 0
// empty string initialization
var state = ""
// no value is currently being displayed
clearState()
// stop the banner if it is currently running
function stopBanner() {
        // if banner is currently running
        if (bannerRunning)
                // stop the banner
                clearTimeout(timerID)
        // banner is now stopped
        bannerRunning = false
}
// start the banner
function startBanner() {
        // make sure the banner is stopped
        stopBanner()
        // start the banner from the current position
        showBanner()
}
// assign state a string of "0" characters of the length of the current message
function clearState() {
        // initialize to empty string
        state = ""
        // create string of same length containing 0 digits
        for (var i = 0; i < ar[message].length; ++i) {
                state += "0"
        }
}
// display the current message
function showBanner() {
        // if the current message is done
        if (getString()) {
                // increment message
                message++
                // if new message is out of range wrap around to first message
                if (ar.length <= message)
                        message = 0
                // new message is first displayed as empty string
                clearState()
                // display next character after pause milliseconds
                timerID = setTimeout("showBanner()", pause)
                // banner is now running
                bannerRunning = true
        } else {
                // initialize to empty string
                var str = ""
                // built string to be displayed (only character selected thus far are displayed)
                for (var j = 0; j < state.length; ++j) {
                        str += (state.charAt(j) == "1") ? ar[message].charAt(j) : "     "
                }
                // partial string is placed in status bar
                window.status = str
                // add another character after speed milliseconds
                timerID = setTimeout("showBanner()", speed)
                // banner is now running
                bannerRunning = true
        }
}
function getString() {
        // set variable to true (it will stay true unless proven otherwise)
        var full = true
        // set variable to false if a free space is found in string (a not-displayed char)
        for (var j = 0; j < state.length; ++j) {
                // if character at index j of current message has not been placed in displayed string
                if (state.charAt(j) == 0)
                        full = false
        }
        // return true immediately if no space found (avoid infinitive loop later)
        if (full)
                return true
        // search for random until free space found (braoken up via break statement)
        while (1) {
                // a random number (between 0 and state.length - 1 == message.length - 1)
                var num = getRandom(ar[message].length)
                // if free space found break infinitive loop
                if (state.charAt(num) == "0")
                        break
        }
        // replace the 0 character with 1 character at place found
        state = state.substring(0, num) + "1" + state.substring(num + 1, state.length)
        // return false because the string was not full (free space was found)
        return false
}
function getRandom(max) {
        return Math.round((max - 1) * Math.random())
}