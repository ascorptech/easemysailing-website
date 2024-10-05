import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex mt-14 justify-center items-center h-[8rem]  bg-green-100 bg-[url('/images/Rectangle1.png')] ">
        <h1 className="text-[46px] leading-[69px] text-green-600 font-bold">
          Privacy Policy
        </h1>
      </div>

      <div className="bg-gray-50 py-10 px-4 md:px-10 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1> */}

          <div className="space-y-6 text-gray-700">
            {/* Introduction Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">1. Introduction</h2>
              <p>
                EaseMySailing Technologies Pvt. Ltd. ("we," "us," or "our") is
                committed to protecting and respecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit and use our platform,
                in accordance with applicable laws, including but not limited to
                the Information Technology Act, 2000, and the EU General Data
                Protection Regulation (GDPR).
              </p>
              <p>
                <strong>Consent:</strong> By accessing or using our platform,
                you agree to the collection and use of your information in
                accordance with this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">
                2. Information We Collect
              </h2>
              <p>We collect the following types of information:</p>

              <h3 className="text-lg mt-2 font-semibold">
                A. Personal Information
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Registration Information: Name, email address, phone number,
                  and other contact details provided during the account creation
                  process.
                </li>
                <li>
                  Employment Information: CVs, job history, certifications,
                  educational background, and professional references.
                </li>
                <li>
                  Demographic Information: Age, gender, nationality, and other
                  similar details.
                </li>
                <li>
                  Payment Information: Billing and financial details, including
                  credit card or bank account information, if applicable.
                </li>
              </ul>

              <h3 className="text-lg mt-2 font-semibold">B. Usage Data</h3>
              <p>
                We collect information about your interactions with our
                platform, including IP addresses, browser types, pages visited,
                time spent on each page, and other analytical data.
              </p>

              <h3 className="text-lg mt-2 font-semibold">
                C. Cookies and Tracking Technologies
              </h3>
              <p>
                We use cookies and similar tracking technologies to enhance user
                experience, personalize content, and gather statistical
                information.
              </p>
            </section>

            {/* How We Use Your Information Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Facilitating recruitment: To match candidates with job
                  opportunities and connect employers with potential hires.
                </li>
                <li>
                  Account management: To manage your user profile, login
                  credentials, and preferences.
                </li>
                <li>
                  Communication: To send notifications, updates, and relevant
                  job opportunities.
                </li>
                <li>
                  Customer support: To address inquiries, technical support, and
                  troubleshoot issues.
                </li>
                <li>
                  Platform improvements: To analyze usage patterns and optimize
                  our platform features.
                </li>
                <li>
                  Legal compliance: To comply with applicable laws, regulations,
                  or legal proceedings.
                </li>
              </ul>
            </section>

            {/* Sharing of Information Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">
                4. Sharing of Information
              </h2>
              <p>
                We may share your information with third parties in the
                following scenarios:
              </p>

              <h3 className="text-lg mt-2 font-semibold">
                A. Employers and Recruiters
              </h3>
              <p>
                When you apply for job opportunities, we share your profile
                information with prospective employers or recruiters to
                facilitate the hiring process.
              </p>

              <h3 className="text-lg mt-2 font-semibold">
                B. Service Providers
              </h3>
              <p>
                We may share information with third-party vendors, such as
                payment processors, cloud service providers, or data analytics
                companies, who assist in delivering platform functionalities.
              </p>

              <h3 className="text-lg mt-2 font-semibold">
                C. Legal Requirements
              </h3>
              <p>
                We may disclose your personal information when required to do so
                by law or in response to valid requests by public authorities
                (e.g., court orders, government agencies).
              </p>

              <h3 className="text-lg mt-2 font-semibold">
                D. Business Transfers
              </h3>
              <p>
                In the event of a merger, acquisition, or sale of company
                assets, user data may be transferred as part of the business
                deal. You will be notified via email and/or a prominent notice
                on our platform of any such change in ownership or control.
              </p>
            </section>

            {/* Data Security Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your
                personal data from unauthorized access, alteration, disclosure,
                or destruction. These measures include encryption, firewalls,
                and secure data storage solutions.
              </p>
              <p>
                However, while we strive to protect your information, no method
                of transmission over the internet is completely secure.
                Therefore, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as your account
                is active or as needed to provide you with our services. We may
                also retain your data to comply with legal obligations, resolve
                disputes, or enforce our agreements.
              </p>
            </section>

            {/* Your Rights Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">7. Your Rights</h2>
              <br />
              <h3 className="text-lg font-semibold">
                A. Access and Correction
              </h3>
              <p>
                You have the right to access, correct, or update your personal
                information at any time through your user account settings.
              </p>
              <h3 className="text-lg mt-2 font-semibold">
                B. Data Portability
              </h3>
              <p>
                In certain circumstances, you have the right to request a copy
                of the personal information we hold about you. We will provide
                this information in a structured, commonly used, and
                machine-readable format. Please note that the decision to
                provide data in a specific format will be at the discretion of
                EaseMySailing Technologies Pvt. Ltd., based on internal
                considerations and feasibility. EaseMySailing Technologies Pvt.
                Ltd. is not obligated to comply with such requests if they are
                not deemed feasible.
              </p>
              <h3 className="text-lg mt-2 font-semibold">C. Deletion</h3>
              <p>
                You can request the deletion of your account and personal data.
                However, certain data may be retained to comply with legal
                obligations or for legitimate business purposes.
              </p>
              <h3 className="text-lg mt-2 font-semibold">
                D. Object or Restrict Processing
              </h3>
              <p>
                You may object to or request the restriction of processing of
                your personal information in certain circumstances, such as
                direct marketing activities.
              </p>
            </section>

            {/* Cookies Policy Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">8. Cookies Policy</h2>
              <p>Our platform uses cookies to:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Enhance user experience</li>
                <li>Track platform usage and performance</li>
                <li>Personalize content and advertisements</li>
              </ul>
              <p>
                You can control cookie preferences through your browser
                settings. However, disabling cookies may affect your experience
                on the platform.
              </p>
            </section>

            {/* Third-Party Links Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">9. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites,
                services, or advertisements that are not operated by us. We are
                not responsible for the privacy practices or the content of
                these third-party sites. We encourage you to review their
                privacy policies.
              </p>
            </section>

            {/* Children's Privacy Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">10. Children’s Privacy</h2>
              <p>
                Our platform is not intended for individuals under the age of
                18. We do not knowingly collect personal data from anyone under
                the age of 18. If we become aware that we have collected such
                data, we will take steps to delete it.
              </p>
            </section>

            {/* Changes to the Privacy Policy Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">
                11. Changes to the Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We will notify
                you of any significant updates by posting the revised policy on
                our platform and updating the "Last Updated" date.
              </p>
            </section>

            {/* Contact Information Section */}
            <section>
              <h2 className="text-2xl font-semibold bg-[#eaeaea]">
                12. Contact Information
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at
              </p>
              <p>
                <Link
                  href="mailto:business@EaseMySailing.com"
                  className="text-blue-500 underline"
                >
                  business@EaseMySailing.com
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
