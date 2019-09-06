/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//* SELECTORS
const cards = document.querySelector(".cards");

//* CARD
function CreateCard(data) {

  //* Create Components
  const myCard = document.createElement("div");
  const myCardInfo = document.createElement("div");
  const myImage = document.createElement("img");
  const myName = document.createElement("h3");
  const myUsername = document.createElement("p");
  const myLocation = document.createElement("p");
  const myProfile = document.createElement("p");
  const myPage = document.createElement("a");
  const myFollowers = document.createElement("p");
  const myFollowing = document.createElement("p");
  const myBio = document.createElement("p");
  
  myProfile.textContent = `My Profile: `;
  //* Structure
  myCard.appendChild(myCardInfo);
  myCard.prepend(myImage);
  myCardInfo.appendChild(myName);
  myCardInfo.appendChild(myUsername);
  myCardInfo.appendChild(myLocation);
  myCardInfo.appendChild(myProfile);
  myProfile.appendChild(myPage);
  myCardInfo.appendChild(myFollowers);
  myCardInfo.appendChild(myFollowing);
  myCardInfo.appendChild(myBio);


  //* Classes
  myCard.classList.add("card");
  myCardInfo.classList.add("card-info");
  myName.classList.add("name");
  myUsername.classList.add("username");

  //* Data
myImage.src = `${data.avatar_url}`;
myName.textContent = `${data.name}`;
myUsername.textContent = `${data.login}`;
myLocation.textContent = `Location: ${data.location}`;
myPage.textContent = data.html_url
myPage.href = data.html_url;
myFollowers.textContent = `Followers: ${data.followers}`;
myFollowing.textContent = `Following: ${data.following}`;
myBio.textContent = `Bio: ${data.bio}`;

  //* Events

  return myCard //returned cards
}
//* ARRAY
const followersArray = [
  "alecblkly",
  "kmcknight1",
  "crsullivan",
  "vanessamclendon2",
  "umekow"
];

//* GET REQUEST
axios
  .get("https://api.github.com/users/mary-clayton")
  .then(response => {
    console.log(response.data);
    const newCard = (CreateCard(response.data))
    cards.appendChild(newCard);

  });
  
  followersArray.forEach(name =>{
    axios.get (`https://api.github.com/users/${name}`)
    .then(response =>{
      console.log(response.data);
      cards.appendChild(CreateCard(response.data))
    });
  })
  
  .catch(error => {
    console.log("error 404", error);
  });



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
