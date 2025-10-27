'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Navigation,
  Building2,
  Clock,
  Users,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PROPERTY_MAP = {
  title: 'Find Our Office',
  description:
    'Visit our headquarters or connect with our global support team across multiple time zones',
  mapImageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=750&fit=crop',
  mapImageAlt: 'InvoiceEasy office location map',
  office1Name: 'San Francisco HQ',
  office1Address: '123 Market Street',
  office1Hours: '9 AM - 6 PM PST',
  office1Status: 'Main Office',
  office2Name: 'New York Office',
  office2Address: '456 Broadway',
  office2Hours: '9 AM - 6 PM EST',
  office2Status: 'Sales Office',
  office3Name: 'Austin Office',
  office3Address: '789 Congress Ave',
  office3Hours: '9 AM - 6 PM CST',
  office3Status: 'Support Hub',
  officesTitle: 'Our Locations',
  contactTitle: 'Get in Touch',
  contact1Name: 'Sales Team',
  contact1Count: '24/7',
  contact2Name: 'Support',
  contact2Count: 'Live Chat',
  contact3Name: 'Phone',
  contact3Count: '+1 (555) 123-4567',
  contact4Name: 'Email',
  contact4Count: 'hello@invoiceeasy.com',
  contact5Name: 'Response Time',
  contact5Count: '< 2 hours',
  legendOpen: 'Open Now',
  legendClosed: 'Closed',
  scheduleCallButton: 'Schedule a Call',
  scheduleCallButtonHref: '/contact',
} as const;

type PropertyMapProps = Partial<typeof DEFAULT_PROPERTY_MAP>;

export default function Map(props: PropertyMapProps) {
  const config = { ...DEFAULT_PROPERTY_MAP, ...props };
  const navigate = useSmartNavigation();

  const offices = [
    {
      id: 1,
      name: config.office1Name,
      address: config.office1Address,
      hours: config.office1Hours,
      status: config.office1Status,
    },
    {
      id: 2,
      name: config.office2Name,
      address: config.office2Address,
      hours: config.office2Hours,
      status: config.office2Status,
    },
    {
      id: 3,
      name: config.office3Name,
      address: config.office3Address,
      hours: config.office3Hours,
      status: config.office3Status,
    },
  ];

  const contacts = [
    { icon: Users, name: config.contact1Name, count: config.contact1Count },
    { icon: MessageSquare, name: config.contact2Name, count: config.contact2Count },
    { icon: Phone, name: config.contact3Name, count: config.contact3Count },
    { icon: Mail, name: config.contact4Name, count: config.contact4Count },
    { icon: Clock, name: config.contact5Name, count: config.contact5Count },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10">
                  <img
                    src={config.mapImageUrl}
                    alt={config.mapImageAlt}
                    className="w-full h-full object-cover opacity-60"
                    data-editable-src="mapImageUrl"
                  />
                </div>

                {/* Office Markers */}
                <div className="absolute inset-0">
                  {/* San Francisco HQ */}
                  <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-12 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Building2 className="size-6" />
                      </Button>
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Card className="p-3 whitespace-nowrap shadow-lg">
                          <p
                            className="text-sm font-semibold text-primary"
                            data-editable="office1Name"
                          >
                            {config.office1Name}
                          </p>
                          <p
                            className="text-xs text-muted-foreground"
                            data-editable="office1Address"
                          >
                            {config.office1Address}
                          </p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            <span data-editable="office1Status">{config.office1Status}</span>
                          </Badge>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* New York Office */}
                  <div className="absolute top-1/4 right-1/4">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Building2 className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Card className="p-2 whitespace-nowrap shadow-lg">
                          <p className="text-xs font-semibold" data-editable="office2Name">
                            {config.office2Name}
                          </p>
                          <p
                            className="text-xs text-muted-foreground"
                            data-editable="office2Address"
                          >
                            {config.office2Address}
                          </p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Austin Office */}
                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90 shadow-lg"
                      >
                        <Building2 className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Card className="p-2 whitespace-nowrap shadow-lg">
                          <p className="text-xs font-semibold" data-editable="office3Name">
                            {config.office3Name}
                          </p>
                          <p
                            className="text-xs text-muted-foreground"
                            data-editable="office3Address"
                          >
                            {config.office3Address}
                          </p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="secondary" className="shadow-lg">
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-primary rounded-full" />
                      <span data-editable="legendOpen">{config.legendOpen}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-muted-foreground rounded-full" />
                      <span data-editable="legendClosed">{config.legendClosed}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Office List */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  <span data-editable="officesTitle">{config.officesTitle}</span>
                </h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div
                      key={office.id}
                      className="p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-medium text-sm" data-editable={`office${index + 1}Name`}>
                          {office.name}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          <span data-editable={`office${index + 1}Status`}>{office.status}</span>
                        </Badge>
                      </div>
                      <p
                        className="text-xs text-muted-foreground mb-1"
                        data-editable={`office${index + 1}Address`}
                      >
                        {office.address}
                      </p>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3 text-muted-foreground" />
                        <p
                          className="text-xs text-muted-foreground"
                          data-editable={`office${index + 1}Hours`}
                        >
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">
                  <span data-editable="contactTitle">{config.contactTitle}</span>
                </h3>
                <div className="space-y-3">
                  {contacts.map((contact, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <contact.icon className="size-5 text-primary" />
                        </div>
                        <span
                          className="text-sm font-medium"
                          data-editable={`contact${idx + 1}Name`}
                        >
                          {contact.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-xs font-medium text-primary"
                          data-editable={`contact${idx + 1}Count`}
                        >
                          {contact.count}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button
              className="w-full"
              size="lg"
              onClick={() => navigate(config.scheduleCallButtonHref)}
              data-editable-href="scheduleCallButtonHref"
              data-href={config.scheduleCallButtonHref}
            >
              <span data-editable="scheduleCallButton">{config.scheduleCallButton}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
