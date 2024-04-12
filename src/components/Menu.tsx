import '../styles/menu.scss'

export function Menu() {
  return (
    <>
      <a data-bs-toggle="offcanvas" role="button" aria-controls="offcanvas">
        <label className="hamburger">
          <input type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </a>

      <div className="offcanvas offcanvas-start" id="offcanvas" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <svg width="100"
            viewBox="0 0 369.89473684210526 92.10627825859069">
            <g
              transform="matrix(1.023471372467052,0,0,1.023471372467052,-5.592247809509746,-5.638303123297071)"
              fill="#ff325d">
              <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"
                d="M50.459,95.503c-2.519,0-4.975-0.259-7.383-0.655l2.064-5.143  c1.744,0.236,3.511,0.399,5.319,0.399c2.501,0,4.94-0.261,7.313-0.703l-5.998-6.497h-8.514h-1.8h-1.8v-5.398h-5.899  c-0.623,1.07-1.771,1.8-3.099,1.8c-1.988,0-3.601-1.612-3.601-3.601s1.612-3.6,3.601-3.6c1.329,0,2.477,0.728,3.099,1.8h5.899v-1.8  v-3.601h3.6H61.26v0.77l4.416,4.784c0.315-0.09,0.641-0.153,0.983-0.153c1.988,0,3.6,1.612,3.6,3.601c0,1.987-1.611,3.598-3.6,3.598  s-3.599-1.61-3.599-3.598c0-0.296,0.044-0.579,0.11-0.854l-4.197-4.547H43.261v7.2H54.06v0.768l7.725,8.366  c6.576-1.96,12.414-5.601,17.071-10.395l-5.483-5.939H72.06V55.081l-5.435-5.883c-1.503,1.309-3.101,2.702-4.651,4.053  c-0.299,0.263-0.893,0.779-0.893,0.779l-1.621,0.024v0.051h-7.699c-0.623,1.072-1.771,1.801-3.1,1.801c-1.988,0-3.6-1.612-3.6-3.601  s1.612-3.599,3.6-3.599c1.329,0,2.477,0.728,3.1,1.8h7.699v0.393l10.799-9.623V27.107h-7.198v7.7  c1.07,0.623,1.798,1.771,1.798,3.099c0,1.988-1.61,3.601-3.599,3.601c-1.987,0-3.6-1.612-3.6-3.601c0-1.329,0.728-2.477,1.8-3.099  v-7.7v-1.8v-1.8h10.799v-7.183c-1.426-0.825-2.89-1.593-4.421-2.238c-0.573,0.264-1.206,0.422-1.879,0.422  c-2.484,0-4.499-2.015-4.499-4.5c0-2.484,2.015-4.499,4.499-4.499c2.243,0,4.087,1.644,4.428,3.788  c15.918,6.93,27.07,22.741,27.07,41.209C95.457,75.357,75.312,95.503,50.459,95.503z M81.058,52.306  c-1.988,0-3.599-1.61-3.599-3.599c0-1.329,0.729-2.477,1.799-3.101V30.708h1.8h1.801h1.87c-2.753-4.731-6.471-8.829-10.869-12.054  v26.453h-2.542c-0.584,0.508-1.25,1.09-1.978,1.723l6.525,7.069l-0.271,0.207h0.064v5.4h2.3c0.622-1.072,1.77-1.8,3.099-1.8  c1.988,0,3.601,1.612,3.601,3.601c0,1.987-1.612,3.6-3.601,3.6c-1.329,0-2.477-0.729-3.099-1.8h-2.3v6.168l5.598,6.063  c5.489-6.791,8.802-15.415,8.802-24.831c0-5.783-1.266-11.257-3.498-16.199h-3.702v11.298c1.072,0.625,1.8,1.772,1.8,3.101  C84.658,50.695,83.046,52.306,81.058,52.306z M50.459,10.908c-1.214,0-2.412,0.076-3.598,0.183v11.386l4.416,4.784  c0.314-0.09,0.64-0.153,0.982-0.153c1.988,0,3.601,1.612,3.601,3.601c0,1.988-1.612,3.6-3.601,3.6s-3.599-1.612-3.599-3.6  c0-0.295,0.044-0.579,0.111-0.853l-2.535-2.748h-1.918l-6.35,5.536l4.86,5.263h0.431v0.468l0.018,0.02l-0.018,0.016v22.897H61.76  c0.622-1.073,1.77-1.801,3.099-1.801c1.988,0,3.601,1.612,3.601,3.601s-1.612,3.599-3.601,3.599c-1.329,0-2.477-0.729-3.099-1.799  H43.261h-1.8h-1.8V39.782L23.152,21.899c-1,0.953-1.942,1.963-2.839,3.015L35.63,41.507h0.431v0.467l0.018,0.02l-0.018,0.016v21.097  v3.599h-3.599h-9h-1.798h-1.8v-8.999h-8.327c2.744,14.895,13.823,26.857,28.229,30.896l-2.025,5.049  C19.088,88.158,5.464,70.936,5.464,50.507c0-24.852,20.146-44.997,44.996-44.997c2.447,0,4.831,0.248,7.172,0.624l-2.062,5.142  C53.893,11.06,52.196,10.908,50.459,10.908z M18.068,27.79c-4.534,6.425-7.206,14.251-7.206,22.717c0,1.214,0.063,2.412,0.171,3.599  h12.428v1.801v1.8v5.4h9V43.382l-5.627-6.095l-5.231,7.245c0.031,0.188,0.06,0.378,0.06,0.575c0,1.988-1.612,3.6-3.6,3.6  s-3.6-1.612-3.6-3.6s1.612-3.6,3.6-3.6c0.401,0,0.779,0.081,1.139,0.202l5.142-7.12L18.068,27.79z M43.261,11.594  c-6.497,1.195-12.418,3.998-17.389,7.942l9.656,10.461l7.733-6.742V11.594z"></path>
            </g>
            <g id="SvgjsG2043"
              transform="matrix(4.646750418240985,0,0,4.646750418240985,108.46846640283682,-13.999517781914882)"
              fill="#ff325d">
              <path
                d="M7.78 5.380000000000001 c1.6667 0 3.0666 0.47 4.2 1.41 s1.7867 2.1834 1.96 3.73 l-3.04 0 c-0.10666 -0.70666 -0.46 -1.3 -1.06 -1.78 s-1.2867 -0.72 -2.06 -0.72 c-1.2267 0 -2.18 0.44 -2.86 1.32 s-1.02 2.0734 -1.02 3.58 c0 1.4667 0.34334 2.63 1.03 3.49 s1.6367 1.29 2.85 1.29 c0.90666 0 1.64 -0.27666 2.2 -0.83 s0.90666 -1.3433 1.04 -2.37 l3.04 0 c-0.16 1.8133 -0.81 3.24 -1.95 4.28 s-2.5834 1.56 -4.33 1.56 c-2.0934 0 -3.7866 -0.69 -5.08 -2.07 s-1.94 -3.1634 -1.94 -5.35 c0 -2.2134 0.64 -4.0234 1.92 -5.43 s2.98 -2.11 5.1 -2.11 z M20.68 9.38 c0.97334 0 1.84 0.22664 2.6 0.67998 s1.3567 1.11 1.79 1.97 s0.65 1.85 0.65 2.97 c0 0.10666 -0.0066602 0.28 -0.02 0.52 l-7.46 0 c0.02666 0.82666 0.24332 1.47 0.64998 1.93 s1.03 0.69 1.87 0.69 c0.52 0 0.99666 -0.13 1.43 -0.39 s0.71 -0.57666 0.83 -0.95 l2.5 0 c-0.73334 2.32 -2.3466 3.48 -4.84 3.48 c-0.94666 -0.01334 -1.8233 -0.22 -2.63 -0.62 s-1.45 -1.0233 -1.93 -1.87 s-0.72 -1.83 -0.72 -2.95 c0 -1.0533 0.24334 -2.0134 0.73 -2.88 s1.1333 -1.5133 1.94 -1.94 s1.6767 -0.64 2.61 -0.64 z M22.86 13.719999999999999 c-0.13334 -0.77334 -0.38 -1.3333 -0.74 -1.68 s-0.87334 -0.52 -1.54 -0.52 c-0.69334 0 -1.24 0.19666 -1.64 0.59 s-0.63334 0.93 -0.7 1.61 l4.62 0 z M24.5 5.380000000000001 l-3.08 2.84 l-1.98 0 l1.92 -2.84 l3.14 0 z M31.62 9.38 c1.3867 0 2.47 0.28002 3.25 0.84002 s1.2167 1.38 1.31 2.46 l-2.7 0 c-0.04 -0.49334 -0.22 -0.85 -0.54 -1.07 s-0.78666 -0.33 -1.4 -0.33 c-0.53334 0 -0.93 0.08 -1.19 0.24 s-0.39 0.4 -0.39 0.72 c0 0.24 0.08666 0.44 0.26 0.6 s0.43668 0.3 0.79002 0.42 s0.74334 0.22 1.17 0.3 c1.2933 0.25334 2.2066 0.51334 2.74 0.78 s0.92334 0.58666 1.17 0.96 s0.37 0.83334 0.37 1.38 c0 1.16 -0.42334 2.05 -1.27 2.67 s-1.9967 0.93 -3.45 0.93 c-1.52 0 -2.7034 -0.32666 -3.55 -0.98 s-1.2833 -1.54 -1.31 -2.66 l2.7 0 c0 0.53334 0.20666 0.95668 0.62 1.27 s0.93334 0.47 1.56 0.47 c0.53334 0 0.97668 -0.11666 1.33 -0.35 s0.53 -0.55668 0.53 -0.97002 c0 -0.26666 -0.11 -0.48666 -0.33 -0.66 s-0.53 -0.32668 -0.93 -0.46002 s-1.02 -0.28668 -1.86 -0.46002 c-0.66666 -0.13334 -1.26 -0.31334 -1.78 -0.54 s-0.91666 -0.52332 -1.19 -0.88998 s-0.41 -0.81666 -0.41 -1.35 c0 -0.68 0.16334 -1.2733 0.49 -1.78 s0.82666 -0.89 1.5 -1.15 s1.51 -0.39 2.51 -0.39 z M42.879999999999995 9.38 c3.0134 0.01334 4.52 0.9933 4.52 2.94 l0 5.48 c0 1.0133 0.12 1.7467 0.36 2.2 l-2.88 0 c-0.10666 -0.32 -0.17332 -0.65334 -0.19998 -1 c-0.84 0.85334 -2 1.28 -3.48 1.28 c-1.08 0 -1.9367 -0.27334 -2.57 -0.82 s-0.95 -1.3067 -0.95 -2.28 c0 -0.94666 0.3 -1.68 0.9 -2.2 c0.61334 -0.54666 1.7267 -0.89332 3.34 -1.04 c1.1467 -0.12 1.8733 -0.27 2.18 -0.45 s0.46 -0.45666 0.46 -0.83 c0 -0.46666 -0.14 -0.81332 -0.42 -1.04 s-0.74666 -0.34 -1.4 -0.34 c-0.6 0 -1.0533 0.12334 -1.36 0.37 s-0.48666 0.64332 -0.54 1.19 l-2.84 0 c0.06666 -1.1333 0.53332 -1.9933 1.4 -2.58 s2.0266 -0.88 3.48 -0.88 z M40.519999999999996 17.06 c0 0.88 0.58 1.32 1.74 1.32 c1.52 -0.01334 2.2866 -0.79334 2.3 -2.34 l0 -1.1 c-0.22666 0.22666 -0.8 0.39332 -1.72 0.49998 c-0.8 0.09334 -1.3867 0.25668 -1.76 0.49002 s-0.56 0.61 -0.56 1.13 z M55.63999999999999 9.38 c0.24 0 0.44668 0.03334 0.62002 0.1 l0 2.64 c-0.30666 -0.06666 -0.64666 -0.1 -1.02 -0.1 c-1.8667 0 -2.8 1.1067 -2.8 3.32 l0 4.66 l-2.84 0 l0 -10.34 l2.7 0 l0 1.92 l0.04 0 c0.28 -0.66666 0.72334 -1.2 1.33 -1.6 s1.2633 -0.6 1.97 -0.6 z"></path>
            </g>
          </svg>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        
        <div className="offcanvas-body">
          <div>N A V I G A T I O N</div>

          <div className='offcanvas-links'>
            <a href='#projects'>PROJECTS</a>
            <a href='#contacts'>CONTACTS</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;