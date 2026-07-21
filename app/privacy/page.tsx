import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Cleareds',
  description:
    'Privacy Policy for Cleareds and its products Plants Pack and Reelfleur. How we collect, use, and protect your personal data.',
};

const LAST_UPDATED = 'July 21, 2026';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/cleareds-logo.png"
                alt="Cleareds"
                width={170}
                height={36}
                priority
                className="h-8 w-auto"
              />
            </Link>
            <nav className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="/terms" className="hover:text-brand-700 transition-colors">
                Terms of Service
              </Link>
              <Link href="/" className="hover:text-brand-700 transition-colors">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">1. Who We Are</h2>
              <p className="mb-3">
                Cleareds is a digital product studio registered in Belgium (company number
                1026.978.194). We operate this website (cleareds.com) and build and operate our own
                digital products, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  <strong>Plants Pack</strong> (plantspack.com and the Plants Pack mobile apps for
                  iOS and Android) — a vegan social platform for discovering plant-based places,
                  sharing posts, and connecting with the community.
                </li>
                <li>
                  <strong>Reelfleur</strong> (reelfleur.com) — a tool that turns your screenshots,
                  logos, and other assets into animated promo videos.
                </li>
              </ul>
              <p className="mb-3">
                Cleareds is the data controller for personal data processed through this website and
                these products. This Privacy Policy explains what data we collect, why we collect
                it, and the rights you have. Where a product has additional, product-specific
                practices, they are described in dedicated sections below.
              </p>
              <p>
                For users in the European Union, we process personal data in accordance with the
                General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-ink mt-4 mb-2">2.1 Information you provide</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Account information:</strong> email address, username or display name,
                  password (stored encrypted), and profile details you choose to add. Both products
                  support signing in with third-party providers (such as Google or Apple), in which
                  case we receive a stable identifier and the email address you choose to share.
                </li>
                <li>
                  <strong>Content:</strong> anything you create or upload — on Plants Pack this
                  includes posts, comments, reviews, photos, and place suggestions; on Reelfleur
                  this includes the screenshots, logos, icons, text prompts, and other assets you
                  upload to generate videos, and the videos you produce.
                </li>
                <li>
                  <strong>Location data (Plants Pack only):</strong> if you grant permission, your
                  location is used to show vegan places near you. We do not collect location in the
                  background or build a location history.
                </li>
                <li>
                  <strong>Payment information:</strong> payments and subscriptions are processed by
                  Stripe (and, for mobile in-app purchases, by Apple, Google, and RevenueCat). We
                  never receive or store your full card details — we only receive confirmation of
                  payment, the subscription status, and billing metadata.
                </li>
                <li>
                  <strong>Communications:</strong> messages you send us by email or through contact
                  forms.
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-ink mt-4 mb-2">2.2 Information collected automatically</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage data:</strong> how you interact with our products and which features you use.</li>
                <li><strong>Device information:</strong> browser type, operating system, and device identifiers.</li>
                <li><strong>IP address:</strong> for security, fraud prevention, and analytics.</li>
                <li><strong>Cookies:</strong> small files used for authentication, preferences, and analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Provide services:</strong> create and maintain your account, deliver product features, process payments and subscriptions.</li>
                <li><strong>Generate content you request:</strong> on Reelfleur, process the assets and prompts you submit to produce your videos.</li>
                <li><strong>Communication:</strong> send transactional emails (confirmations, password resets, billing notices) and respond to your inquiries. Marketing emails are sent only with your explicit opt-in consent, and every one includes an unsubscribe link.</li>
                <li><strong>Security and moderation:</strong> protect against fraud, abuse, and unauthorized access, and enforce our Terms of Service.</li>
                <li><strong>Improvement:</strong> understand how our products are used so we can improve them.</li>
                <li><strong>Legal compliance:</strong> comply with legal obligations and respond to lawful requests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contract:</strong> to provide the services you have signed up for.</li>
                <li><strong>Consent:</strong> where you have given explicit permission (e.g. location sharing, newsletters). You can withdraw consent at any time.</li>
                <li><strong>Legitimate interests:</strong> to secure and improve our services and prevent abuse.</li>
                <li><strong>Legal obligation:</strong> to comply with applicable laws, including tax and accounting rules.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">5. AI Processing</h2>
              <p className="mb-3">
                Both products use third-party AI providers for specific, user-initiated features:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  <strong>Reelfleur</strong> sends the text prompts you write (and related project
                  context) to <strong>Anthropic</strong> (Claude API) to generate the styling and
                  motion of your video. Your uploaded image files are composited by our own
                  rendering pipeline — they are used exactly as provided and are not repainted or
                  regenerated by AI.
                </li>
                <li>
                  <strong>Plants Pack</strong> uses <strong>OpenAI</strong> for content-moderation
                  assistance and for its optional scanner tools (ingredient, menu, and barcode
                  scanning). Scanned images are processed for the scan only, are not stored on our
                  servers afterwards, and are not used to train AI models.
                </li>
              </ul>
              <p>
                Our AI providers process this data under API terms that prohibit using it to train
                their models. If you prefer not to have data processed by an AI provider, do not use
                the AI-powered features — core functionality remains available without them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">6. Sharing and Third-Party Services</h2>
              <p className="mb-3">
                We do not sell your personal information. We share data only with service providers
                that help us operate, with other users where a product is social by design (e.g.
                your public Plants Pack profile and posts), when required by law, or in the event of
                a business transfer. Our main service providers are:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li><strong>Supabase:</strong> database, authentication, and file storage (EU region).</li>
                <li><strong>Stripe:</strong> payment and subscription processing.</li>
                <li><strong>Apple, Google &amp; RevenueCat:</strong> mobile in-app purchases and subscription management.</li>
                <li><strong>Vercel and Railway:</strong> hosting and deployment.</li>
                <li><strong>Anthropic:</strong> AI generation for Reelfleur.</li>
                <li><strong>OpenAI:</strong> content moderation and scanner features for Plants Pack.</li>
                <li><strong>Resend:</strong> transactional email delivery.</li>
                <li><strong>OpenFreeMap / OpenStreetMap:</strong> map tiles and geocoding for Plants Pack.</li>
                <li><strong>Apple Push Notification service and Firebase Cloud Messaging:</strong> delivery of push notifications you have opted into.</li>
              </ul>
              <p>These providers have their own privacy policies, which we encourage you to review.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">7. Data Retention</h2>
              <p className="mb-3">
                We retain your data while your account is active and for as long as needed to
                provide the services or as required by law. When you delete your account, we remove
                or anonymize your personal data within 30 days, except where retention is legally
                required (e.g. invoices for tax purposes) or necessary to prevent abuse.
              </p>
              <p>
                You can delete your account from within each product&apos;s settings, or by emailing
                us at hello@cleareds.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">8. Your Privacy Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li><strong>Access</strong> a copy of your personal data.</li>
                <li><strong>Correct</strong> inaccurate information.</li>
                <li><strong>Delete</strong> your account and data.</li>
                <li><strong>Port</strong> your data in a machine-readable format.</li>
                <li><strong>Object</strong> to certain processing.</li>
                <li><strong>Withdraw consent</strong> where processing is based on consent.</li>
                <li><strong>Complain</strong> to your data protection authority — in Belgium, the Autorité de protection des données / Gegevensbeschermingsautoriteit.</li>
              </ul>
              <p>
                To exercise these rights, contact us at hello@cleareds.com and include &ldquo;GDPR
                Request&rdquo; in the subject line.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">9. Data Security</h2>
              <p>
                We use industry-standard security measures: encryption in transit (HTTPS) and at
                rest, secure password hashing, access controls, and monitoring for suspicious
                activity. No method of transmission over the internet is 100% secure, but we take
                all reasonable precautions to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">10. Cookies</h2>
              <p>
                We use essential cookies (authentication and basic functionality), preference
                cookies (your settings), and analytics cookies (how our products are used). You can
                manage cookies through your browser settings and, where shown, through our cookie
                consent banner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">11. Children&apos;s Privacy</h2>
              <p>
                Our products are not intended for users under 16 years of age, and we do not
                knowingly collect data from children. If you believe a child has provided us with
                personal data, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">12. International Data Transfers</h2>
              <p>
                We host data in the European Union where possible. Where data is processed outside
                your country of residence (for example by a US-based service provider), we ensure
                appropriate safeguards are in place, such as Standard Contractual Clauses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes via email or an in-product notice. Continued use of our services
                after changes take effect constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">14. Contact Us</h2>
              <ul className="list-none space-y-2">
                <li><strong>Data controller:</strong> Cleareds, Belgium (company number 1026.978.194)</li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:hello@cleareds.com" className="text-brand-600 hover:underline">
                    hello@cleareds.com
                  </a>
                </li>
              </ul>
            </section>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">
                By using cleareds.com, Plants Pack, or Reelfleur, you acknowledge that you have read
                and understood this Privacy Policy.
              </p>
              <Link href="/terms" className="text-brand-600 hover:underline text-sm font-medium">
                Read our Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-ink text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-white/40">
            &copy; 2026 Cleareds · Company number (Belgium): 1026.978.194 ·{' '}
            <Link href="/privacy" className="hover:text-white/70 underline">Privacy Policy</Link> ·{' '}
            <Link href="/terms" className="hover:text-white/70 underline">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
