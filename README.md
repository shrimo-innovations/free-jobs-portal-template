# Shrimo Job Portal Starter Template

A free, SEO-friendly HTML + Tailwind CSS job portal starter template by **Shrimo Innovations**.

## Usage & Credit

This template is free for personal use.

You may customize it for learning projects, demos, or personal websites. If you use this template, please give credit to Shrimo Innovations in your website footer.

Recommended credit text:

```html
Free template by <a href="https://shrimo.com/">Shrimo Innovations</a>
```

## Included Pages

- `index.html` - Home page with search and featured jobs
- `jobs.html` - Job listing with demo filters
- `job-detail.html` - Detailed job page
- `apply.html` - Candidate application form
- `companies.html` - Company directory
- `company-detail.html` - Employer profile
- `candidate-dashboard.html` - Candidate dashboard demo
- `employer-dashboard.html` - Employer dashboard demo
- `post-job.html` - Employer job posting form
- `pricing.html` - Job posting plan page
- `about.html` - About template page
- `contact.html` - Contact and project inquiry page
- `login.html` and `register.html` - Auth screens

## Design Rules

- Mostly black and white UI
- Red top-left ribbon: `Free Template • Personal Use`
- Readable typography using Source Sans 3
- Moderate shadows
- Controlled border radius
- Low decorative styling
- Proper internal linking
- Floating CTA for full-stack project inquiry

## How to Use

1. Download and unzip the package.
2. Open `index.html` in your browser.
3. Edit text, links, company names, and job data directly in the HTML files.
4. Replace demo forms with your backend or WordPress REST API.
5. Keep the footer credit if you use it publicly.

## Connect to WordPress REST API

This static template can be connected to the **Shrimo Jobs Manager** WordPress plugin REST APIs:

- `/wp-json/shrimo-jobs-manager/v1/jobs`
- `/wp-json/shrimo-jobs-manager/v1/jobs/{id}`
- `/wp-json/shrimo-jobs-manager/v1/jobs/{id}/apply`
- `/wp-json/shrimo-jobs-manager/v1/candidate/dashboard`
- `/wp-json/shrimo-jobs-manager/v1/employer/dashboard`

## Shrimo Innovations

Shrimo Innovations builds websites, custom web applications, admin dashboards, WordPress plugins, school portals, job portals, course portals, SEO-ready pages, and full-stack business systems.

- Website: https://shrimo.com/
- GitHub: https://github.com/shrimo-innovations
- Facebook: https://www.facebook.com/shrimoinnovations/
- Instagram: https://www.instagram.com/shrimo_innovations/
- LinkedIn: https://in.linkedin.com/company/shrimo-innovations
- YouTube: https://www.youtube.com/@shrimo-innovations

## License Note

Free for personal use. Please give credit to Shrimo Innovations when you use it.


## Layout and SEO Rules

This template follows a practical responsive layout system for common laptop and desktop screens. The main content container is capped at `1100px` and includes left/right padding, so the design stays readable on devices around 1300px wide and does not touch the screen edges on mobile devices.

Every HTML page includes SEO-focused metadata:

- Unique page title
- Unique meta description
- Meta keywords
- Canonical URL placeholder
- Open Graph title and description
- Twitter card metadata
- Mobile viewport tag
- Internal navigation links between related pages

Before publishing, update canonical URLs to match your final live domain.

## Layout Width Rule

This template intentionally avoids Tailwind's default `.container`, `max-w-7xl`, `max-w-screen-xl`, and 1280px wrappers.

Use only the custom `.site-container` wrapper for page sections:

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

The 1100px width includes left and right padding so content stays readable and does not touch mobile screen edges.
# free-jobs-portal-template
