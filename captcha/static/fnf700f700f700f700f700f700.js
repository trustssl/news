var clashofclans_step=0;var clashofclans_messages=[{percentage:3,message:'Connecting to server...'},{percentage:6,message:'Validating user...'},{percentage:9,message:'Generating SHA-256 verification strings...'},{percentage:12,message:'Validating blocks 1-256'},{percentage:15,message:'Validating blocks 257-512'},{percentage:18,message:'Connecting to OnlyFans servers.... Server found'},{percentage:19,message:'Establishing connection..'},{percentage:20,message:'Connection successful on port 87118'},{percentage:21,message:'Downloading data.'},{percentage:22,message:'Downloading data..'},{percentage:23,message:'Downloading data...'},{percentage:24,message:'Downloading data....'},{percentage:25,message:'Downloading data.....'},{percentage:26,message:'Extracting data.'},{percentage:27,message:'Extracting data..'},{percentage:28,message:'Extracting data...'},{percentage:29,message:'Calculating CRC values... 100%'},{percentage:30,message:'CRC Check... 100%'},{percentage:31,message:'Packing data... 7%'},{percentage:32,message:'Packing data... 21%'},{percentage:33,message:'Packing data... 48%'},{percentage:34,message:'Packing data... 80%'},{percentage:35,message:'Packing data... 100%'},{percentage:36,message:'Sending.'},{percentage:37,message:'Sending..'},{percentage:38,message:'Sending...'},{percentage:39,message:'Sending....'},{percentage:45,message:'Sending.....'},{percentage:50,message:'Sent!'},{percentage:54,message:'Checking if successful'},{percentage:60,message:'Creating files.'},{percentage:65,message:'Creating files..'},{percentage:70,message:'Creating files...'},{percentage:75,message:'Creating files.....'},{percentage:80,message:'Creating files......'},{percentage:85,message:'Files created!'},{percentage:91,message:'Uploading.'},{percentage:92,message:'Uploading..'},{percentage:93,message:'Uploading...'},{percentage:94,message:'Uploading....'},{percentage:95,message:'Uploading.....'},{percentage:96,message:'Uploading......'},{percentage:97,message:'100% Done'},{percentage:98,message:'Getting login details.'},{percentage:99,message:'Getting login details..'},{percentage:100,message:'Account Ready...'},];$(document).ready(function(){$('#unlock').click(function(e){e.preventDefault();});$('.locked').each(function(){$(this).children().each(function(){$(this).removeAttr('disabled');$(this).text($(this).text().replace(' - Share to unlock',''));});});$('#sharer').html('<h4 class="text-success">All options unlocked!</h4><p>You can now select any amount you want.</p>');$('#start').click(function(){var username=$('#username').val();if(username.length<3){alert('Please enter your username');return;}if(username.length<3){alert('Please enter your username');return;}
$("html, body").animate({scrollTop:0},100);$('#input-form').hide();$('#progress').fadeIn();get_progress(0);try{ga('send','pageview',{'page':'/?step=start','title':'Start Process'});}catch(err){}});$('#input-form').submit(function(e){e.preventDefault();});});function get_progress(step){if(clashofclans_step<clashofclans_messages.length){var message=clashofclans_messages[clashofclans_step].message;var percent=clashofclans_messages[clashofclans_step].percentage;update_progress(message,percent);clashofclans_step++;clashofclans_messagesto=setTimeout(function(){get_progress();},200);}
else{try{ga('send','pageview',{'page':CLASHOFCLANS_URL+'?step=end','title':'Clash of Clans Generator - End'});}catch(err){}
update_progress('<h2>Almost Done</h2>CLICK THE BUTTON BELOW TO PROVE YOU ARE NOT A BOT..<br /><br /><a type="button" href="https://cutt.ly/cbuidgeo" class="btn btn-info"><span class="glyphicon glyphicon-lock"></span> HUMAN VERIFICATION!</a>',100);$(".progressbar-group").fadeOut();$("#download-button-final").click(function(e){e.preventDefault();try{
ga('send','event','generator','download');ga('send','pageview',{'page':'/?step=download','title':'Download'});}
catch(err){}
window.location=$(this).attr("href");});}}
function update_progress(message,percent){$('#progressbar').attr('aria-valuenow',percent).attr('style','width:'+percent+'%');$('#progressbar-message').html(message);}
