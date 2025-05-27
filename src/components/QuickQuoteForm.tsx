import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    productType: "",
    quantity: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { productType, quantity, name, phone, email } = formData;

    // Uncomment for basic validation if needed
    // if (!productType || !quantity || !name || !phone) {
    //   alert("Please fill in all required fields.");
    //   return;
    // }

    const message = `
📦 *New Quote Request*
------------------------------
🛒 *Product Type:* ${productType}
🔢 *Quantity:* ${quantity}

👤 *Name:* ${name}
📱 *Phone:* ${phone}
📧 *Email:* ${email || "Not provided"}
------------------------------
📍 Please get in touch with the customer.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "918779165356";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="quickquote" className="py-16 bg-slate-50">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get Quick Quote
            </h2>
            <p className="text-lg text-slate-600">
              Tell us about your requirements and get a competitive quote within
              24 hours
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-slate-900 text-white">
              <CardTitle className="text-2xl text-center">
                Request Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Type */}
                  <div>
                    <label
                      htmlFor="productType"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Product Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="productType"
                      value={formData.productType}
                      onChange={(e) =>
                        setFormData({ ...formData, productType: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    >
                      <option value="" disabled>
                        Select product type
                      </option>
                      <option value="Stainless Steel Tubes">
                        Stainless Steel Tubes
                      </option>
                      <option value="Industrial Pipes">Industrial Pipes</option>
                      <option value="Railing Fittings">Railing Fittings</option>
                      <option value="Steel Coils">Steel Coils</option>
                      <option value="Benches & Furniture">Benches & Furniture</option>
                      <option value="Grills & Gates">Grills & Gates</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="quantity"
                      type="text"
                      placeholder="e.g., 100 meters, 50 pieces"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg"
                >
                  <Send className="mr-2" size={20} />
                  Send Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
