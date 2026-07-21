import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Cleareds',
  description:
    'Terms of Service for Cleareds and its products Plants Pack and Reelfleur, including accounts, subscriptions, payments, and content rules.',
};

const LAST_UPDATED = 'July 21, 2026';

export default function TermsOfServicePage() {
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
              <Link href="/privacy" className="hover:text-brand-700 transition-colors">
                Privacy Policy
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
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">1. Acceptance of Terms</h2>
              <p className="mb-3">
                These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you and
                Cleareds, a company registered in Belgium (company number 1026.978.194,
                &ldquo;Cleareds&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). They govern your use of
                this website (cleareds.com) and of the digital products we operate:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  <strong>Plants Pack</strong> — plantspack.com and the Plants Pack mobile apps for
                  iOS and Android.
                </li>
                <li>
                  <strong>Reelfleur</strong> — reelfleur.com, a tool for creating animated promo
                  videos from your own assets.
                </li>
              </ul>
              <p>
                By creating an account or using any of these services, you agree to these Terms and
                to our{' '}
                <Link href="/privacy" className="text-brand-600 hover:underline">
                  Privacy Policy
                </Link>
                . If you do not agree, please do not use the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">2. Description of Services</h2>
              <p className="mb-3">
                <strong>Plants Pack</strong> is a free social platform for the vegan and plant-based
                community: discovering and reviewing vegan places, sharing posts, and connecting
                with others. It is funded by voluntary supporter contributions.
              </p>
              <p className="mb-3">
                <strong>Reelfleur</strong> is a creative tool that turns the files you upload
                (screenshots, logos, icons) into animated promo videos using a credit-based system.
                A free tier with limited credits is available; the paid <strong>Pro</strong>{' '}
                subscription provides additional monthly credits and removes the export watermark.
              </p>
              <p>
                We continuously improve our services and may add, change, or remove features. Where
                a change materially reduces functionality you have paid for, we will inform you in
                advance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">3. Accounts</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least 16 years old to create an account.</li>
                <li>You must provide accurate information and keep your credentials secure.</li>
                <li>You are responsible for all activity that occurs under your account.</li>
                <li>One person may not maintain multiple accounts to abuse free tiers, credits, or promotions.</li>
                <li>Notify us immediately at hello@cleareds.com if you suspect unauthorized use of your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">4. Subscriptions, Payments, and Credits</h2>
              <h3 className="text-lg font-semibold text-ink mt-4 mb-2">4.1 Payment processing</h3>
              <p className="mb-3">
                Payments are processed securely by <strong>Stripe</strong>. Mobile in-app purchases,
                where offered, are processed by Apple or Google and managed through RevenueCat. We
                never store your full payment details.
              </p>
              <h3 className="text-lg font-semibold text-ink mt-4 mb-2">4.2 Reelfleur subscriptions and credits</h3>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  The Pro subscription renews automatically each billing period until cancelled. You
                  can cancel at any time via the billing portal; your plan remains active until the
                  end of the current period, and no further charges are made.
                </li>
                <li>
                  Credits are consumed when you generate or refine videos. Credits have no monetary
                  value, are non-transferable, and unused credits do not carry over or convert to
                  refunds unless required by law.
                </li>
                <li>
                  Prices may change. Price changes apply from your next billing period and will be
                  announced in advance; existing subscribers may be kept on their current price at
                  our discretion.
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-ink mt-4 mb-2">4.3 Plants Pack supporter contributions</h3>
              <p className="mb-3">
                Plants Pack is free to use. Supporter contributions are voluntary, do not purchase
                features or preferential treatment, and are non-refundable except as required by
                law.
              </p>
              <h3 className="text-lg font-semibold text-ink mt-4 mb-2">4.4 EU right of withdrawal and refunds</h3>
              <p>
                If you are an EU consumer, you normally have a 14-day right of withdrawal for online
                purchases. For digital services delivered immediately (such as generation credits
                you begin using), you consent to immediate performance and acknowledge that the
                withdrawal right lapses to the extent the service has been performed. For unused
                subscriptions, contact us within 14 days of purchase at hello@cleareds.com and we
                will refund you. Nothing in these Terms limits your statutory consumer rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">5. Your Content and Ownership</h2>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  <strong>You keep ownership</strong> of everything you upload or create — posts,
                  photos, and reviews on Plants Pack; assets, prompts, and generated videos on
                  Reelfleur.
                </li>
                <li>
                  You grant us a limited, non-exclusive license to host, process, and display your
                  content solely to operate the services (e.g. showing your posts to other Plants
                  Pack users, or rendering your Reelfleur videos).
                </li>
                <li>
                  Videos you export from Reelfleur are yours to use commercially, subject to you
                  having the rights to the assets you uploaded.
                </li>
                <li>
                  You are responsible for ensuring you have the rights to any content you upload,
                  including logos, screenshots, and imagery belonging to third parties.
                </li>
              </ul>
              <p>
                We may remove content that violates these Terms, our community guidelines, or
                applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">6. AI-Generated Output</h2>
              <p>
                Reelfleur uses AI to generate styling and motion from your prompts. Your uploaded
                files are used pixel-exact and are not repainted by AI. AI output can occasionally
                be imperfect — review your videos before publishing them. To the extent permitted by
                law, we do not guarantee that generated output will be error-free or fit for a
                particular purpose. Plants Pack uses AI to assist content moderation and for
                optional scanning tools; scan results are informational and not a substitute for
                checking product labels yourself.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">7. Prohibited Activities</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Break the law or infringe the intellectual-property, privacy, or other rights of others.</li>
                <li>Upload malicious code or attempt to gain unauthorized access to our systems or other users&apos; accounts.</li>
                <li>Harass, threaten, or abuse other users, or post hateful, discriminatory, or sexually explicit content.</li>
                <li>Post spam, misleading content, or fake reviews, or scrape or bulk-collect data from the services.</li>
                <li>Circumvent credit limits, watermarks, rate limits, or other technical restrictions.</li>
                <li>Resell or provide the services to third parties as your own offering without our written consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">8. Moderation and Termination</h2>
              <p className="mb-3">
                We may warn you, remove content, suspend, or terminate accounts that violate these
                Terms — with the severity matched to the violation. Where reasonable, we will tell
                you the reason and give you an opportunity to respond.
              </p>
              <p>
                You may stop using the services and delete your account at any time from the
                product settings or by emailing us. Sections that by their nature should survive
                termination (ownership, disclaimers, liability, governing law) survive it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">9. Intellectual Property</h2>
              <p>
                The services themselves — including software, design, branding, and the Cleareds,
                Plants Pack, and Reelfleur names and logos — are owned by Cleareds and protected by
                intellectual-property laws. Except for the rights to your own content described in
                Section 5, no rights in the services are transferred to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">10. Disclaimers and Limitation of Liability</h2>
              <p className="mb-3">
                The services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We do
                not warrant uninterrupted or error-free operation. User-generated content (including
                place information and reviews on Plants Pack) reflects the views of its authors, not
                ours, and we do not guarantee its accuracy.
              </p>
              <p className="mb-3">
                To the maximum extent permitted by law, Cleareds is not liable for indirect,
                incidental, or consequential damages, or for loss of profits, data, or goodwill,
                arising from your use of the services. Our total aggregate liability is limited to
                the greater of (a) the amount you paid us in the 12 months preceding the claim and
                (b) EUR 100.
              </p>
              <p>
                Nothing in these Terms excludes liability that cannot be excluded under applicable
                law, including liability for intent or gross negligence, or your statutory rights as
                a consumer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">11. Indemnification</h2>
              <p>
                You agree to indemnify Cleareds against claims by third parties arising from content
                you upload without having the necessary rights, or from your use of the services in
                violation of these Terms or applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">12. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. For material changes, we will notify
                you by email or an in-product notice at least 14 days before they take effect.
                Continued use of the services after the effective date constitutes acceptance. If
                you do not agree with the changes, stop using the services and delete your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">13. Governing Law and Disputes</h2>
              <p>
                These Terms are governed by the laws of Belgium. Disputes will be submitted to the
                competent courts of Belgium, without prejudice to mandatory consumer-protection
                rules that let you bring or defend claims in your country of residence. EU consumers
                may also use the European Commission&apos;s Online Dispute Resolution platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink mb-3">14. Contact</h2>
              <ul className="list-none space-y-2">
                <li><strong>Cleareds</strong> — Belgium, company number 1026.978.194</li>
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
                and agree to these Terms of Service.
              </p>
              <Link href="/privacy" className="text-brand-600 hover:underline text-sm font-medium">
                Read our Privacy Policy →
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
