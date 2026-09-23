# MallQ Experience

Build a modern, clean and premium-looking web application called:

"MallQ – Smart Shopping Mall Management System"

This is a BE CSE AIML capstone project for a shopping mall management system.

IMPORTANT:

For this first phase, focus ONLY on the frontend UI/UX, page structure, navigation and reusable components.

Do NOT implement the ML model, FastAPI backend, database, authentication logic or deployment yet.

Create realistic mock data only where needed for the UI.

==================================================

DESIGN DIRECTION

==================================================

The website should look:

- Very clean

- Modern

- Minimal

- Premium but not overly corporate

- Spacious

- Professional enough for a college capstone project

- Easy to navigate

- Mobile, tablet and desktop responsive

Use a SOFT PASTEL COLOR PALETTE.

Preferred colors:

- Warm off-white / ivory background

- Soft blush pink

- Dusty rose

- Muted lavender

- Soft sage green

- Pale peach

- Very light blue

- Dark charcoal text

Do NOT use:

- Neon colors

- Very saturated colors

- Excessive gradients

- Dark/heavy backgrounds

- Excessive glassmorphism

- Too many colors on one page

Use pastel colors mainly as accents, cards, badges and subtle backgrounds.

Typography:

- Clean modern sans-serif

- Strong but elegant headings

- Excellent readability

- Clear visual hierarchy

Use:

- Rounded cards

- Subtle shadows

- Soft borders

- Moderate border radius

- Plenty of whitespace

- Clean icons

- Consistent spacing

The website should feel similar to a modern premium lifestyle/shopping application rather than a generic admin template.

==================================================

BRANDING

==================================================

Application name:

MallQ

Tagline:

"Your Smart Mall Experience"

Create a simple text-based MallQ logo/wordmark with a subtle shopping/mall-inspired icon.

Do not use copyrighted brand logos.

==================================================

CUSTOMER WEBSITE

==================================================

Create the following pages:

1. HOME

Hero section:

- MallQ branding

- Heading:

  "Everything You Love, All in One Place."

- Short description explaining that MallQ helps customers discover stores, offers, events, food and parking information.

- Primary CTA: "Explore the Mall"

- Secondary CTA: "View Offers"

Include:

- Featured stores section

- Popular categories

- Current offers

- Upcoming events

- Food & dining section

- Parking availability preview

- Simple footer

Use attractive placeholder images for stores/categories where appropriate.

--------------------------------------------------

2. STORES / MALL DIRECTORY

Create a clean store directory.

Include:

- Search bar

- Category filter

- Sort option

- Store cards

Categories:

- Fashion

- Electronics

- Beauty

- Lifestyle

- Sports

- Home

- Food

- Entertainment

Each store card should contain:

- Store image/logo placeholder

- Store name

- Category

- Floor

- Short description

- "View Store" button

--------------------------------------------------

3. STORE DETAILS

Create a detailed store page containing:

- Store image

- Store name

- Category

- Floor/location

- Opening hours

- Description

- Current offers

- Contact information

- "Get Directions" button

--------------------------------------------------

4. OFFERS

Create an attractive offers page.

Include:

- Search

- Category filters

- Offer cards

- Discount percentage

- Store name

- Validity date

- "View Offer" button

Use pastel badges for different categories.

--------------------------------------------------

5. EVENTS

Create an events page.

Include:

- Upcoming events

- Event cards

- Date

- Time

- Location

- Event category

- "View Details" button

Include a visually attractive featured event section.

--------------------------------------------------

6. FOOD COURT

Create a food and dining page.

Include:

- Restaurant/food outlet cards

- Cuisine

- Floor

- Price range

- Rating

- Vegetarian/non-vegetarian indicator

- "View Details"

Categories:

- Indian

- Chinese

- Fast Food

- Cafe

- Desserts

--------------------------------------------------

7. PARKING

Create a parking information page.

Display:

- Total parking spaces

- Available spaces

- Occupied spaces

- Two-wheeler spaces

- Four-wheeler spaces

Use clean visual indicators.

For now, use mock data.

Clearly structure the UI so that real-time data can later be connected through an API.

Include:

"Parking availability updates automatically."

Do NOT claim this is actually real-time yet.

--------------------------------------------------

8. USER PROFILE

Create a profile page with:

- User information

- Favorite stores

- Saved offers

- Event registrations

- Notification preferences

Use mock data for now.

==================================================

ADMIN DASHBOARD

==================================================

Create a completely separate admin interface.

Admin dashboard should have:

Sidebar:

- Dashboard

- Stores

- Users

- Offers

- Events

- Parking

- Analytics

- Settings

Top navigation:

- Search

- Notifications

- Admin profile

--------------------------------------------------

ADMIN DASHBOARD HOME

Create dashboard cards for:

- Total Users

- Total Stores

- Active Offers

- Upcoming Events

- Parking Occupancy

Below the cards include:

- Footfall overview chart

- Store category distribution

- Recent activity

- Recent offers

- Upcoming events

IMPORTANT:

The footfall chart should be labelled as "Historical Footfall" for now.

Do NOT create fake AI predictions.

Leave the architecture ready for a future "AI Footfall Prediction" module.

--------------------------------------------------

MANAGE STORES

Create:

- Store table

- Search

- Filter

- Add Store button

- Edit

- Delete

- Store status

Use mock data.

--------------------------------------------------

MANAGE USERS

Create:

- User table

- Search

- User status

- Registration date

- View details

--------------------------------------------------

MANAGE OFFERS

Create:

- Offer table/cards

- Add offer

- Edit

- Delete

- Activate/deactivate

--------------------------------------------------

MANAGE EVENTS

Create:

- Event management table

- Add event

- Edit

- Delete

- Event status

--------------------------------------------------

MANAGE PARKING

Create:

- Parking overview

- Total capacity

- Occupied

- Available

- Vehicle type breakdown

Use mock data only.

==================================================

ANALYTICS PAGE

==================================================

Create a professional analytics dashboard.

Include placeholders for:

- Historical footfall

- Store performance

- Customer activity

- Offer engagement

- Parking usage

Use clean charts.

IMPORTANT:

Do not fabricate ML results.

Use clearly labelled mock/historical data until the actual ML model is integrated later.

Add a clearly marked placeholder card:

"AI Footfall Prediction"

"Machine learning prediction module will be connected here."

==================================================

NAVIGATION

==================================================

Customer navbar:

- MallQ logo

- Home

- Stores

- Offers

- Events

- Food

- Parking

- Search

- Profile

Admin navigation should be completely separate.

Use React Router or the project's appropriate routing system.

Every navigation item should work and lead to its corresponding page.

==================================================

COMPONENT STRUCTURE

==================================================

Create reusable components for:

- Navbar

- Footer

- StoreCard

- OfferCard

- EventCard

- RestaurantCard

- DashboardCard

- Sidebar

- SearchBar

- FilterBar

- Modal

- Buttons

- Badges

- Empty states

- Loading states

Keep the code modular and maintainable.

==================================================

RESPONSIVENESS

==================================================

The website must work properly on:

- Desktop

- Laptop

- Tablet

- Mobile

Do not allow:

- Horizontal scrolling

- Overlapping cards

- Broken navigation

- Text overflowing containers

==================================================

IMPORTANT DEVELOPMENT RULES

==================================================

1. Do not implement backend yet.

2. Do not implement database yet.

3. Do not implement ML yet.

4. Do not implement FastAPI yet.

5. Use mock data only for the frontend.

6. Keep the project structure clean so backend/API integration can be added later.

7. Do not create unnecessary features.

8. Do not use excessive animations.

9. Prioritize clean UI and usability.

10. Make the application look like a real premium shopping mall platform.

11. Keep all components reusable.

12. Make sure the application runs without errors.

13. Do not leave broken routes.

14. Do not generate fake AI predictions.

15. Do not rewrite or remove working functionality unless necessary.

At the end, verify that all pages and navigation work correctly.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
