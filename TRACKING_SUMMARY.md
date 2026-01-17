# Meta Pixel Tracking Implementation Summary

## Deployment
✅ **Live URL**: https://peakleads.web.app

## What Was Implemented

### 1. Meta Pixel Base Code
- Added Meta Pixel base code to `app/layout.tsx`
- Pixel ID: `1409351230586757`
- Automatically tracks PageView on every page load

### 2. Conversion Tracking Utility (`utils/metaPixel.ts`)
Created comprehensive tracking functions:
- `trackCalendlyClick()` - Tracks when user clicks any "Book a Call" button
- `trackCalendlyScheduled()` - Tracks when user successfully schedules a call via Calendly
- `trackFormSubmission()` - Tracks form submissions

### 3. Tracking Points Implemented

#### Header (`components/layout/Header.tsx`)
- ✅ "Book A Call" button - tracks as `InitiateCheckout` event
- Source: `header`

#### Homepage (`app/page.tsx`)
1. ✅ **Hero Section "Book A Call" button**
   - Source: `hero_section`
   - Tracks as `InitiateCheckout` when clicked

2. ✅ **Floating Video Button** (bottom right)
   - Source: `floating_video_button`
   - Tracks when user clicks to scroll to calendar

3. ✅ **Calendly Embed Section**
   - Tracks clicks on embed area: `calendly_embed_area`
   - **Automatically tracks when call is scheduled**: `calendly.event_scheduled`
   - Fires `Lead` event + custom `CallScheduled` event

4. ✅ **Contact Form** ("Let's Begin" section)
   - Tracks form submission as `Lead` event
   - Source: `Contact Form - Lets Begin`

## Events Tracked in Facebook

### Standard Events:
1. **PageView** - Every page load
2. **InitiateCheckout** - When user clicks any "Book a Call" button (shows intent)
3. **Lead** - When user:
   - Successfully schedules a Calendly appointment ✅
   - Submits the contact form ✅

### Custom Events:
- **CallScheduled** - Additional custom event for detailed reporting

## How to Test

### In Browser Console:
1. Visit: https://peakleads.web.app
2. Open browser console (F12)
3. Click any "Book A Call" button
4. You'll see: `[Meta Pixel] Tracked Calendly click from: [source]`

### In Facebook Events Manager:
1. Go to: https://business.facebook.com/events_manager2/list/pixel/1409351230586757
2. Click on "Test Events" tab
3. Visit your website and interact with buttons
4. You should see events appear in real-time

### Test Checklist:
- [ ] PageView on homepage load
- [ ] InitiateCheckout when clicking header "Book A Call"
- [ ] InitiateCheckout when clicking hero section "Book A Call"
- [ ] InitiateCheckout when clicking floating video button
- [ ] InitiateCheckout when clicking Calendly embed area
- [ ] Lead + CallScheduled when completing Calendly booking
- [ ] Lead when submitting contact form

## Facebook Ads Optimization

### For Campaign Setup:
1. **Optimization Event**: Choose "Lead" 
2. **Conversion Event**: Select "Lead" event from your pixel
3. The pixel will track all successful bookings and form submissions

### Attribution:
- Facebook will attribute conversions to the ad that drove the user to your site
- 7-day click and 1-day view attribution window (default)

## Monitoring

All tracking includes console logs for debugging:
- Enable browser console to see tracking confirmations
- Events are prefixed with `[Meta Pixel]`
- Source parameter helps identify which button/form drove conversion

## Notes

- ✅ All "Book a Call" buttons are tracked
- ✅ Calendly embeds automatically track successful bookings
- ✅ Contact form submissions are tracked
- ✅ Works on all pages (pixel is in root layout)
- ✅ No additional configuration needed in Facebook - just set up your ads!

## Next Steps

1. Verify events in Facebook Events Manager Test Events
2. Create a Custom Conversion if needed for specific optimization
3. Set up your Facebook ad campaigns with "Lead" optimization
4. Monitor conversion data in Ads Manager
