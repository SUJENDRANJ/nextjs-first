export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h1>
        <div className="mt-6 prose prose-lg">
          <p className="text-gray-500">
            Welcome to MyApp! We are passionate about creating exceptional web experiences that combine
            cutting-edge technology with beautiful design. Our mission is to help businesses and
            individuals achieve their goals through innovative digital solutions.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Vision</h2>
          <p className="text-gray-500">
            We envision a world where technology empowers everyone to achieve their full potential. Our
            team works tirelessly to create solutions that are not only powerful but also accessible
            and user-friendly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Values</h2>
          <ul className="list-disc list-inside text-gray-500 space-y-2">
            <li>Innovation: We constantly push the boundaries of what's possible</li>
            <li>Quality: We never compromise on the quality of our work</li>
            <li>User Focus: Everything we do is centered around our users</li>
            <li>Transparency: We believe in open and honest communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}