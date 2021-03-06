const itemsAPI = new APIHandler("https://ironhackevaluation.herokuapp.com");

$(document).ready(()=>{

  $('#makeoffer').on('click', (e) => {
    console.log("test: " + e.target);
    e.preventDefault();
    var itemId = $('input[name="item-id"]').val();
    console.log("this is the item Id: " + itemId);

    const thisOffer = {
      amount: $('input[name="makeoffer"]').val(),
      bidder: $('input[name="user-id"]').val()
    };

    console.log(thisOffer);
    itemsAPI.updateOneItem(thisOffer,itemId);
    itemsAPI.getOneRegister("items", itemId, updatePage);
  });

});

function updatePage (response) {
  console.log(response.currentOffers);
  let tmpArray = [];
  let highOffer;
  let cOffers = response.currentOffers;
  if (cOffers.length === 0) { highOffer = "No Offers";} else {
    cOffers.forEach((offer)=>{
      tmpArray.push(offer.amount);
    });
    highOffer = Math.max.apply(null, tmpArray);
  }
  $('#offer-label').html(highOffer);
}

function showFeedback (postResponse) {
  console.log('post success');
  console.log(postResponse);
}

function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}
