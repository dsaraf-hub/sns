# Email Profile Picture Setup Guide

## 🚨 SPECIAL SECTION: GoDaddy + Outlook Users

**If you're using Outlook via GoDaddy email hosting (like you are), here's your specific setup:**

### Reality Check for GoDaddy + Outlook:
- ❌ **Outlook recipients won't see your logo** (Outlook doesn't support profile pictures from GoDaddy hosting)
- ✅ **Gmail recipients WILL see your logo** (if you set up Google Account method)
- ✅ **Other email clients may show it** (Yahoo, Apple Mail, etc.)

### Your Best Strategy:

#### 1. **Google Account Setup** (MOST IMPORTANT)
Even though you use Outlook, **most of your recipients probably use Gmail**. Set this up:

1. Go to [accounts.google.com](https://accounts.google.com)
2. Create account using `hello@table4six.in`
3. Upload your Table 4 Six logo as profile picture
4. **Result**: Gmail users (majority of people) will see your logo

#### 2. **Yahoo Account Setup** (Secondary)
1. Go to [yahoo.com](https://yahoo.com) 
2. Create account using `hello@table4six.in`
3. Upload your logo
4. **Result**: Yahoo users will see your logo

#### 3. **Domain Favicon** (Universal Fallback)
1. Create favicon from your logo (16x16, 32x32 px)
2. Upload to your website root (`table4six.in/favicon.ico`)
3. **Result**: Some email clients will pull this automatically

#### 4. **GoDaddy Limitations**
- GoDaddy email hosting doesn't support custom profile pictures
- You can't upgrade this without changing email providers
- Outlook desktop/web clients rarely show sender profile pictures anyway

### Quick Win Strategy:
**Focus on Google Account setup** - it covers 60%+ of email recipients who use Gmail!

---

## Overview
Getting your Table 4 Six logo to appear as a profile picture in email clients requires different approaches for different providers. Here are the most effective methods:

## Method 1: Google Account Setup (Free & Most Effective)
**Best for: Gmail, Google Workspace users**

### Steps:
1. Go to [accounts.google.com](https://accounts.google.com)
2. Create a new Google account using `hello@table4six.in`
3. Verify the email address
4. Add your profile picture:
   - Click your profile picture in top right
   - Select "Manage your Google Account"
   - Go to "Personal info" → "Photo"
   - Upload your `logo.png` with black background
   - Crop to a square format

### Result:
- Gmail users will see your logo next to emails from `hello@table4six.in`
- Works for Google Workspace recipients
- Most reliable free method

## Method 2: Domain Favicon Setup
**Best for: Universal coverage across email clients**

### Steps:
1. Create a favicon from your logo:
   - Take `logo.png`
   - Resize to 32x32 pixels and 16x16 pixels
   - Save as `favicon.ico`
2. Upload to your domain root (`table4six.in/favicon.ico`)
3. Add to your website's HTML:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

### Result:
- Some email clients will pull your favicon automatically
- Works across different email providers
- Good fallback method

## Method 3: SendGrid Sender Authentication
**Best for: Professional setup**

### Steps:
1. Log into SendGrid dashboard
2. Go to Settings → Sender Authentication
3. Authenticate your domain (`table4six.in`)
4. Set up SPF, DKIM, and DMARC records
5. Add your logo in SendGrid's sender identity settings

### Benefits:
- Improves deliverability
- Some email clients will show your authenticated sender logo
- Professional email authentication

## Method 4: BIMI (Premium Option)
**Best for: Large businesses with budget**

### Requirements:
- Cost: $1,500+ per year for Verified Mark Certificate
- Requires DMARC authentication
- Trademark registration for your logo

### Result:
- Guaranteed logo display in major email clients
- Premium brand recognition
- Enhanced security

## Method 5: Multiple Email Provider Setup
**For comprehensive coverage:**

1. **Gmail**: Set up Google account with your domain email
2. **Outlook**: Create Microsoft 365 account if hosting with Microsoft
3. **Yahoo**: Create Yahoo account with your domain email
4. **Gravatar**: Set up at gravatar.com for third-party email clients

## Recommended Approach

### Start with Method 1 (Google Account):
- Free and most effective
- Covers the largest user base (Gmail users)
- Quick to set up

### Then add Method 2 (Favicon):
- Universal fallback
- Good for other email clients
- Professional touch for your website

### Optional: Method 3 (SendGrid Authentication):
- Improves overall email deliverability
- Professional sender reputation

## Image Specifications

### For Profile Pictures:
- **Format**: PNG or JPG
- **Size**: Square format (recommended 400x400px minimum)
- **Background**: Solid color (black works well for your logo)
- **File size**: Under 1MB for best compatibility

### For Favicon:
- **Format**: ICO, PNG
- **Sizes**: 16x16px, 32x32px, 48x48px
- **Background**: Transparent or black

## Testing Your Setup

After setup, test by:
1. Sending test emails to different email clients
2. Check Gmail, Outlook, Yahoo, Apple Mail
3. Ask team members to check their inboxes
4. Use `npm run test:email` to send test emails

## Expected Results

- **Gmail**: Should show your logo immediately after Google account setup
- **Outlook**: May show if using Microsoft 365 hosting
- **Yahoo**: Will show if you set up Yahoo profile
- **Apple Mail**: Limited support, subscribers can add manually
- **Mobile apps**: Often better support than web clients

## Troubleshooting

- **Logo not showing**: Wait 24-48 hours for changes to propagate
- **Gmail only**: Most common - means Google account setup worked
- **No display anywhere**: Check image format and size requirements
- **Inconsistent display**: Normal - email clients handle avatars differently

## Maintenance

- Update profile pictures when rebranding
- Check different email clients periodically
- Monitor SendGrid authentication status
- Renew certificates if using BIMI 