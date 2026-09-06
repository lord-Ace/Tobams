import type { SVGProps } from "react";

/**
 * Shared prop contract for every icon in this library.
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Width & height in px (or any CSS size unit as a string). Default: 24 */
  size?: number | string;
  /** Stroke width for outline-based icons. Default: 1.75 */
  strokeWidth?: number;
}

/* -------------------------------------------------------------------------- */
/* Account / User                                                             */
/* -------------------------------------------------------------------------- */

export function AccountIcon({
  size = 24,
  strokeWidth = 1.75,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Hamburger Menu                                                             */
/* -------------------------------------------------------------------------- */

export function HamburgerIcon({
  size = 24,
  strokeWidth = 1.75,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* LinkedIn                                                                   */
/* -------------------------------------------------------------------------- */

export function LinkedInIcon({
  size = 24,
  className,
  strokeWidth,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.75h3.38V21H3.5V8.75Zm6.63 0h3.24v1.68h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.07 2.26 4.07 5.2V21h-3.38v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V21h-3.39V8.75Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Instagram                                                                  */
/* -------------------------------------------------------------------------- */

export function InstagramIcon({
  size = 24,
  strokeWidth = 1.75,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* X (Twitter/X)                                                              */
/* -------------------------------------------------------------------------- */

export function XIcon({
  size = 24,
  className,
  strokeWidth,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M4 3.5h3.6l4.03 5.6 4.6-5.6h2.27l-5.9 7.18 6.3 8.82h-3.6l-4.43-6.14-5.03 6.14H3.57l6.36-7.75L4 3.5Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Phone                                                                      */
/* -------------------------------------------------------------------------- */

export function PhoneIcon({
  size = 24,
  strokeWidth = 1.75,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M5.5 3.5h2.7l1.3 4-1.9 1.6a11.5 11.5 0 0 0 5.3 5.3l1.6-1.9 4 1.3v2.7c0 1.1-.9 2-2 2A15.5 15.5 0 0 1 3.5 5.5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Envelope / Mail                                                            */
/* -------------------------------------------------------------------------- */

export function EnvelopeIcon({
  size = 24,
  strokeWidth = 1.75,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Lightning Bolt                                                             */
/* -------------------------------------------------------------------------- */

export function LightningIcon({
  size = 24,
  strokeWidth = 1.75,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M13 3 4.5 13.5h5.4L11 21l8.5-10.5h-5.4L13 3Z" />
    </svg>
  );
}
