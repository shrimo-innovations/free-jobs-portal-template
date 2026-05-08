# Job Portal Starter Template

A free HTML + Tailwind CSS starter template for creating a simple job portal website.

This template is suitable for job listing websites, recruitment agencies, local hiring platforms, placement services, and demo projects.

## Preview

Open `index.html` in your browser to preview the template.

You can also deploy it on GitHub Pages, Netlify, Vercel, cPanel hosting, or any static hosting provider.

## Pages Included

- `index.html` - Homepage
- `jobs.html` - Job listing page
- `job-detail.html` - Job details page
- `apply.html` - Job application form
- `companies.html` - Company listing page
- `company-detail.html` - Company details page
- `candidate-dashboard.html` - Candidate dashboard demo
- `employer-dashboard.html` - Employer dashboard demo
- `post-job.html` - Post a job form
- `pricing.html` - Job posting plans
- `about.html` - About page
- `contact.html` - Contact page
- `login.html` - Login page
- `register.html` - Registration page

## Folder Structure

```text
job-portal-template/
├── index.html
├── jobs.html
├── job-detail.html
├── apply.html
├── companies.html
├── company-detail.html
├── candidate-dashboard.html
├── employer-dashboard.html
├── post-job.html
├── pricing.html
├── about.html
├── contact.html
├── login.html
├── register.html
├── LICENSE
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

## How to Use

1. Download and unzip the template.
2. Open `index.html` in your browser.
3. Edit the HTML content as needed.
4. Replace demo links, job data, images, and contact details.
5. Connect forms to your backend or API if needed.

## Customization

You can update:

- Website name and logo text
- Job listings and company names
- Contact details
- Social media links
- SEO title and meta description
- Footer credit text
- Form action/API integration

## Backend Integration

This is a static frontend template.

To make it dynamic, connect it with:

- WordPress REST API
- Shrimo Jobs Manager plugin
- Laravel / Node.js backend
- Firebase / Supabase
- Any custom job portal API

Example WordPress API usage:

```js
fetch('/wp-json/shrimo-jobs-manager/v1/jobs')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Design Notes

- Black and white layout
- Red template ribbon
- Responsive design
- SEO-friendly page structure
- 1100px maximum content width
- Mobile-safe spacing
- Practical job portal sections
- Moderate shadows
- Controlled border radius

## Layout Rule

The main layout uses a custom `.site-container` class.

```css
.site-container {
  max-width: 1100px !important;
  width: 100%;
  margin-inline: auto;
  padding-inline: 20px;
  box-sizing: border-box;
}

@media (max-width: 560px) {
  .site-container {
    padding-inline: 16px;
  }
}
```

Do not replace it with Tailwind `container`, `max-w-7xl`, `max-w-screen-xl`, or any 1280px layout wrapper.

## SEO Checklist Before Publishing

- Update page titles
- Update meta descriptions
- Replace canonical URLs
- Add real job and company content
- Use proper heading structure
- Add alt text to images
- Connect internal pages properly
- Submit sitemap after deployment

## Accessibility Notes

- Keep text contrast high
- Use readable font sizes
- Add labels to form fields
- Use descriptive button text
- Add alt text for images
- Test on mobile devices

## License

This template is released under the MIT License.

See the `LICENSE` file for details.

## Credit Request

Credit is appreciated but not required under MIT.

If this template helps you, you can keep a small footer credit:

```html
Free template by <a href="https://shrimo.com/">Shrimo Innovations</a>
```

## Shrimo Innovations Links

- Website: https://shrimo.com/
- GitHub: https://github.com/shrimo-innovations
- Facebook: https://www.facebook.com/shrimoinnovations/
- Instagram: https://www.instagram.com/shrimo_innovations/
- LinkedIn: https://in.linkedin.com/company/shrimo-innovations
- YouTube: https://www.youtube.com/@shrimo-innovations

## Need a Full-Stack Version?

This template is a static frontend starter.

If you want a production-ready job portal, Shrimo Innovations can help you build the complete full-stack system, including:

- WordPress REST API integration
- Shrimo Jobs Manager plugin setup
- Candidate and employer dashboards
- Login, registration, and role-based access
- Job posting and application workflows
- Resume upload and secure file handling
- Admin dashboard and reports
- Payment or subscription features if required
- Deployment and SEO setup

Website: https://shrimo.com/  
GitHub: https://github.com/shrimo-innovations

## Version

Template Version: 1.0.0  
Package Type: Static HTML + Tailwind CSS starter  
License: MIT  
Created by: Shrimo Innovations
