/* Creating Header element */
const headerMain = document.createElement('header');
headerMain.setAttribute('id', 'header');
document.body.append(headerMain);

/* Adding img logo to header */
const imgHeader = document.createElement('img');
imgHeader.setAttribute('id', 'header_image');
imgHeader.src = "./assets/playlist_play.svg";
headerMain.append(imgHeader);

/* Creating header Title */
const headerTitle = document.createElement('h3');
headerTitle.append("inTube");
headerTitle.setAttribute('id', 'headerTitle');
headerMain.append(headerTitle);

/* Main Heading h1 */
const mainTitle = document.createElement('h1');
mainTitle.setAttribute('id', 'main_title');
mainTitle.append('My Playlists');
document.body.append(mainTitle);

/* Creating first DIV for videos */
const firstDiv = document.createElement('div');
firstDiv.setAttribute('id', 'first_div');
document.body.append(firstDiv);

const div_heading = document.createElement('h2');
div_heading.append('Education videos');
div_heading.setAttribute('id', 'div_heading');
firstDiv.append(div_heading);