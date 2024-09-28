function show_dashboard(){
    document.getElementById('dashboard').style.display='block';
    document.getElementById('listing').style.display='none';
    document.getElementById('setting').style.display='none';
}
function show_listing(){
    document.getElementById('dashboard').style.display='none';
    document.getElementById('listing').style.display='block';
    document.getElementById('setting').style.display='none';
}
function show_setting(){
    document.getElementById('dashboard').style.display='none';
    document.getElementById('listing').style.display='none';
    document.getElementById('setting').style.display='block';
}