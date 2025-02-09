import { AuthDialog } from "./auth/auth-dialog";
import { Button } from "./ui/button";
import { useAuth } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Allow viewing landing page even when logged in

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Connect, Network And Collaborate.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A professional network tailored for chefs, restaurants, suppliers,
            and event specialists.
          </p>
          <div className="flex justify-center gap-4">
            <AuthDialog />
            <Button variant="outline">Learn More</Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Tailored For Every Role In The F&B Industry
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Chefs",
                  description:
                    "Build your portfolio, showcase your skills, and find exciting opportunities.",
                },
                {
                  title: "Restaurants",
                  description:
                    "Find talented staff, manage your team, and grow your business.",
                },
                {
                  title: "Suppliers",
                  description:
                    "Connect with restaurants and chefs, expand your network.",
                },
              ].map((feature, i) => (
                <div key={i} className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "ChefLink has transformed how I connect with restaurants and find new opportunities.",
                author: "Michael Chen",
                role: "Executive Chef",
              },
              {
                quote:
                  "Finding talented chefs has never been easier. The platform is intuitive and effective.",
                author: "Sarah Johnson",
                role: "Restaurant Owner",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-sm">
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Networking Now!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Create Your Profile to Enhance your Start Connecting
            </p>
            <div className="flex justify-center gap-4">
              <AuthDialog />
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
