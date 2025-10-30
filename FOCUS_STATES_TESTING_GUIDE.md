# Focus States Testing Guide

## Quick Start Testing

### 1. Basic Keyboard Navigation Test
1. Open the website in your browser
2. Press **Tab** repeatedly to move focus through interactive elements
3. You should see a **blue ring outline** appear around each focused element
4. The focus ring should be:
   - Clearly visible (2-3px thick)
   - Blue colored (#3b82f6 or #60a5fa)
   - Positioned around the element with 2-4px offset
   - Not overlapping important content

### 2. Visible Focus Ring Verification
**Expected Focus Indicator Appearance:**
- Standard elements: 2px blue outline with 2px offset
- Buttons/CTAs: 2px blue outline with 2-4px offset
- Dark backgrounds: Light blue (#60a5fa) for better contrast
- Inset rings: Blue ring inside element borders

**Test Each Element Type:**

#### Navigation Bar
- [ ] Logo link - focus ring appears around logo
- [ ] "Story" link - blue ring visible
- [ ] "Courses" dropdown - ring around button
  - [ ] Press Enter/Space to open dropdown
  - [ ] Press Tab to navigate dropdown items
  - [ ] Press Escape to close dropdown
- [ ] "Resources" link - focus ring visible
- [ ] "Testimonials" link - focus ring visible
- [ ] "Blog" link - focus ring visible
- [ ] "Contact" link - focus ring visible
- [ ] "JOIN" button - ring with larger offset
- [ ] Mobile menu button (on small screens) - ring visible

#### Mobile Navigation (on mobile device or small screen)
- [ ] Menu button opens/closes with Enter/Space
- [ ] Menu items Tab-navigable
- [ ] Dropdown items Tab-navigable
- [ ] Escape key closes menu

#### Footer
- [ ] "Join Our Community" button - prominent ring
- [ ] Social icons - ring around each icon
  - [ ] Instagram icon - ring visible
  - [ ] YouTube icon - ring visible
  - [ ] Twitter icon - ring visible
  - [ ] TikTok icon - ring visible
- [ ] Course links - ring on hover/focus
- [ ] Resource links - ring on hover/focus
- [ ] Legal links - ring on hover/focus
- [ ] "Anyro" link - ring visible
- [ ] Bottom "Join Community" link - ring visible

#### Course Pages (e.g., Instagram Ignited, AI Influencers)
- [ ] All CTA buttons show focus ring
- [ ] Module cards are focusable (if interactive)
- [ ] Pricing buttons show focus ring

#### FAQ Sections
- [ ] FAQ items are keyboard focusable
- [ ] Ring appears around FAQ header
- [ ] Enter/Space key expands/collapses FAQ
- [ ] Ring visible with focus-within styling

#### General Buttons
- [ ] ShimmerButton components - ring visible
- [ ] EnhancedButton variants - ring visible
- [ ] All CTA buttons - ring visible

---

## Detailed Testing Procedures

### Test 1: Tab Navigation Flow
**Objective:** Verify focus order is logical and covers all interactive elements

**Steps:**
1. Go to homepage
2. Press Tab 50 times and note:
   - [ ] Every Tab press moves focus to next interactive element
   - [ ] Focus ring is visible before and after Tab
   - [ ] Focus order makes logical sense (left-to-right, top-to-bottom)
   - [ ] No elements are skipped
   - [ ] Can reach all interactive elements via Tab
3. Repeat on mobile menu (open menu first)
4. Repeat on footer links

**Expected Result:** All interactive elements receive focus in logical order

---

### Test 2: Reverse Tab Navigation
**Objective:** Verify Shift+Tab works correctly

**Steps:**
1. Focus last element on page (Shift+Tab from start)
2. Press Shift+Tab repeatedly
3. Verify:
   - [ ] Focus moves backwards through elements
   - [ ] Ring visible at each step
   - [ ] Order is reverse of Tab navigation

**Expected Result:** Shift+Tab navigates backwards through all elements

---

### Test 3: Keyboard Activation
**Objective:** Verify buttons work with Enter and Space keys

**Steps:**
1. Navigate to any button with Tab
2. Press **Enter**
   - [ ] Button action triggers
   - [ ] Focus ring remains or moves appropriately
3. Navigate to another button
4. Press **Space**
   - [ ] Button action triggers
   - [ ] Focus ring visible

**Test Elements:**
- [ ] "JOIN" button - navigates to Whop
- [ ] Dropdown buttons - open/close dropdown
- [ ] Mobile menu button - opens/closes menu
- [ ] CTA buttons on course pages - trigger action
- [ ] FAQ items - expand/collapse

**Expected Result:** All buttons activate with Enter/Space

---

### Test 4: Escape Key
**Objective:** Verify Escape closes dropdowns and menus

**Steps:**
1. Open Courses dropdown with Tab and Enter
   - [ ] Dropdown opens
   - [ ] Focus moves into dropdown
2. Press **Escape**
   - [ ] Dropdown closes
   - [ ] Focus returns to dropdown button
3. Open mobile menu
   - [ ] Menu opens
4. Press **Escape**
   - [ ] Menu closes
   - [ ] Focus returns to menu button

**Expected Result:** Escape closes all popups/menus

---

### Test 5: Focus Ring Visibility
**Objective:** Verify focus ring is visible in all conditions

**Test Cases:**
1. **Different Backgrounds**
   - [ ] Focus ring visible on dark backgrounds
   - [ ] Focus ring visible on light backgrounds
   - [ ] Focus ring visible on gradient backgrounds
   - [ ] Focus ring visible on colored backgrounds

2. **Zoom Levels**
   - [ ] 100% zoom - ring visible
   - [ ] 125% zoom - ring visible
   - [ ] 150% zoom - ring visible
   - [ ] 200% zoom - ring visible

3. **Contrast**
   - [ ] Ring has sufficient contrast against background
   - [ ] Ring is not the same color as background
   - [ ] Ring thickness is noticeable

**Expected Result:** Focus ring visible in all scenarios

---

### Test 6: Mobile Accessibility
**Objective:** Verify keyboard navigation works on mobile devices

**Requirements:** Mobile device with external keyboard (Bluetooth or USB)

**Steps:**
1. Connect keyboard to mobile device
2. Navigate with Tab key
   - [ ] Focus ring appears on mobile
   - [ ] All interactive elements reachable
3. Use Enter/Space to activate buttons
   - [ ] Buttons activate correctly
4. Use Escape to close menus
   - [ ] Menus close correctly

**Expected Result:** Full keyboard navigation on mobile devices

---

### Test 7: Dropdown Navigation
**Objective:** Verify dropdown menu keyboard navigation

**Steps:**
1. Navigate to "Courses" dropdown with Tab
2. Press **Enter** or **Space** to open
   - [ ] Dropdown opens
   - [ ] Focus ring visible on first item
3. Press **Tab** to move through items
   - [ ] Each dropdown item receives focus
   - [ ] Ring visible on each item
4. Press **Escape**
   - [ ] Dropdown closes
   - [ ] Focus returns to "Courses" button

**Items to Test:**
- [ ] Instagram Ignited
- [ ] AI Influencers
- [ ] Digital Products
- [ ] Futures Trading

**Expected Result:** All dropdown items keyboard accessible

---

### Test 8: Screen Reader Compatibility
**Objective:** Verify screen readers announce focus states

**Tools:** NVDA (Windows), JAWS (Windows), or VoiceOver (macOS/iOS)

**Steps:**
1. Enable screen reader
2. Navigate with Tab key
3. Listen for:
   - [ ] Element type announced (button, link, etc.)
   - [ ] Element text/label announced
   - [ ] Focus state changes announced
   - [ ] Aria-labels read correctly

**Elements to Check:**
- [ ] "JOIN" button - announces as button
- [ ] Dropdown buttons - announces aria-expanded state
- [ ] Social icons - aria-label "Visit {platform}" announced
- [ ] FAQ items - announces as button
- [ ] All links - announces as link

**Expected Result:** Screen reader announces all interactive elements with context

---

### Test 9: No Keyboard Traps
**Objective:** Verify user can escape from any focused element

**Steps:**
1. Navigate to every interactive element
2. Try to move focus away with Tab
   - [ ] Can always move forward
   - [ ] Can always move backward (Shift+Tab)
3. No element should keep focus trapped

**Expected Result:** Focus always moves when Tab is pressed

---

### Test 10: Hover and Focus Together
**Objective:** Verify focus ring visible even when hovering

**Steps:**
1. Tab to an element to show focus ring
2. Move mouse over element
   - [ ] Both hover AND focus styles visible
   - [ ] Focus ring not hidden by hover effect
3. Move mouse away
   - [ ] Focus ring remains (element still has focus)

**Expected Result:** Hover and focus states coexist properly

---

## Browser Testing Checklist

### Chrome/Chromium
- [ ] Tab navigation works
- [ ] Focus ring visible (blue)
- [ ] Enter/Space/Escape work
- [ ] No console errors
- [ ] Zoom 100-200% - ring visible

### Firefox
- [ ] Tab navigation works
- [ ] Focus ring visible
- [ ] All keyboard shortcuts work
- [ ] No console errors

### Safari
- [ ] Tab navigation works
- [ ] Focus ring visible
- [ ] Keyboard navigation complete
- [ ] VoiceOver accessible

### Edge
- [ ] Tab navigation works
- [ ] Focus ring visible
- [ ] All keyboard shortcuts work

---

## Common Issues and Solutions

### Issue 1: Focus ring not visible
**Cause:** CSS issue or element styling
**Solution:**
- Check browser DevTools (Inspect Element)
- Verify focus-visible class is applied
- Check for conflicting CSS
- Ensure outline is not hidden

### Issue 2: Focus order is illogical
**Cause:** HTML structure or z-index issues
**Solution:**
- Check DOM order in DevTools
- Verify tabIndex attributes
- Check for position: absolute/fixed issues
- Ensure proper semantic HTML

### Issue 3: Dropdown doesn't open with Enter
**Cause:** Missing keyboard event handler
**Solution:**
- Check onKeyDown handler exists
- Verify Enter key is checked (e.key === 'Enter')
- Check preventDefault() is called

### Issue 4: Mobile menu doesn't work with keyboard
**Cause:** Focus management or event handling
**Solution:**
- Verify button is focusable (tabIndex or semantic button)
- Check keyboard handlers on mobile
- Test with actual keyboard, not mobile keyboard

---

## Accessibility Validation

### Automated Testing Tools
1. **axe DevTools** - Chrome/Firefox extension
   - Run scan on every page
   - Check for focus-related issues

2. **WAVE** - Web Accessibility Evaluation Tool
   - Highlight focus indicators
   - Check contrast ratios

3. **Lighthouse** - Chrome DevTools
   - Accessibility audit
   - Check focus indicators

4. **NVDA/JAWS** - Screen Reader Testing
   - Verify all elements announced
   - Check focus indicators

### Manual Checklist
- [ ] Every interactive element is focusable
- [ ] Focus order is logical
- [ ] Focus indicator is visible (3:1+ contrast)
- [ ] Focus indicator is at least 3px
- [ ] Can navigate entire site with Tab key
- [ ] Can activate buttons with Enter/Space
- [ ] Dropdowns work with keyboard
- [ ] No keyboard traps
- [ ] Screen readers announce focus
- [ ] Zoom 200% still shows focus ring

---

## Sign-Off Checklist

Before deploying, verify all items:

### Visual Indicators
- [ ] Focus ring color: Blue (#3b82f6 or #60a5fa)
- [ ] Focus ring width: 2-3px
- [ ] Focus ring offset: 2-4px
- [ ] No layout shift when focus applied
- [ ] Ring not overlapping important content

### Keyboard Navigation
- [ ] Tab key navigates all elements
- [ ] Shift+Tab navigates backwards
- [ ] Enter activates buttons
- [ ] Space activates buttons
- [ ] Escape closes menus/dropdowns
- [ ] No keyboard traps

### Accessibility
- [ ] WCAG 2.1 Level AA compliant
- [ ] Screen reader compatible
- [ ] Mobile keyboard navigation works
- [ ] Focus visible at all zoom levels
- [ ] Proper ARIA labels present

### Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### Devices
- [ ] Desktop computer
- [ ] Laptop
- [ ] Tablet (with keyboard)
- [ ] Mobile phone (accessibility features)

---

## Questions to Answer Before Sign-Off

1. Can keyboard-only users navigate entire website?
2. Can users with low vision see all focus indicators?
3. Do screen readers announce focus changes?
4. Are there any keyboard traps?
5. Does focus ring have sufficient contrast?
6. Are all interactive elements focusable?
7. Is focus order logical and predictable?
8. Does zoom to 200% still show focus ring?

**If YES to all above: READY FOR DEPLOYMENT**
