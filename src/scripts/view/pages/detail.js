import UrlParser from '../../routes/url-parser';
import Spinner from '../templates/spinner';
import RestaurantSource from '../../data/resto-source';
import restodetail from '../templates/restodetail';
import LikeButtonInitiator from '../../utils/likebutton-initiator';
import PostReview from '../../utils/postreview-initiator';
import { initSwalError } from '../../utils/swal-initiator';

const detail = {
  async render() {
    return `
    <div class="container">
    <div id="loading"></div>

    <div class="like" id="likeButtonContainer"></div>

    <div id="main-container">
      <h2 class="title-container">Resto Detail</h2>

      <section id="detail-resto"></section>

      <div class="form-review">
        <form>
          <div class="mb-3">
            <label for="name-input" class="form-label">Name</label>
            <input name="name-input" type="text" class="form-control" id="name-input"  placeholder="Your name..." required>
          </div>

          <div class="mb-3">
            <label for="review-input" class="form-label">Review</label>
            <textarea name="review-input" type="text" class="form-control" id="review-input" placeholder="Your review..." required></textarea>
          </div>
          <div class="btn-container">
          <button id="submit-review" type="submit" class="btn-review">Submit Review</button>
        </form>
      </div>
    </div>
  </div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const detailContainer = document.querySelector('#detail-resto');

    // change main display to spinner
    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);

      // use the detail data
      console.info(data);
      detailContainer.innerHTML += restodetail(data.restaurant);

      // init like button
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        data,
      });

      // change spinner display to main
      mainContainer.style.display = 'block';
      loading.style.display = 'none';

      // review form
      const btnSubmitReview = document.querySelector('#submit-review');
      const nameInput = document.querySelector('#name-input');
      const reviewInput = document.querySelector('#review-input');

      btnSubmitReview.addEventListener('click', async (e) => {
        e.preventDefault();
        PostReview();

        // POST review
        await PostReview(url, nameInput.value, reviewInput.value);

        // Send message to websocket serve
        // clear form input
        nameInput.value = '';
        reviewInput.value = '';
      });
    } catch (err) {
      console.error(err);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      detailContainer.innerHTML = `Error: ${err.message}`;
      initSwalError(err.message);
    }
  },
};

export default detail;
