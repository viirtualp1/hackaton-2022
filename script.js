const PreviewCard = {
  data: function () {
    return {
      counter: 1,
    };
  },
  template: `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipNJGhi5azvn1rLyltliJ2GBwxCcYhy3NfGXzy9-=s680-w680-h510" 
            class="card__image img-fluid rounded-start" 
            alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>

            <a href="#" class="btn btn-success">Посмотреть</a>
          </div>
        </div>
      </div>
    </div>
  `,
};

Vue.component("preview-card", PreviewCard);

new Vue({ el: "#app" });
