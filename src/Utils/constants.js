// netflix logo
export const netflixLogo="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
// user logo
export const userLogo="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const apiOption = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_tmdbApi
  }
};

export const CARD_CDN_URL="https://image.tmdb.org/t/p/w500"

export const BG_Cover="https://assets.nflxext.com/ffe/siteui/vlv3/aad37504-bbe0-407d-b8a8-fb31b8faf374/web_tall_panel/IN-en-20241028-TRIFECTA-perspective_2f496d82-4466-44ef-b581-9d69138a2914_large.jpg";

export const SUPPORTED_LANG=[
  {identifier:"en",
    name:"English"
  },
  {identifier:"hindi",
    name:"Hindi"
  },
  {identifier:"bengali",
    name:"Bengali"
  }
]

export const gptApi=process.env.REACT_APP_gptApi



