import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Target, TrendingUp, Users } from "lucide-react";
import { getSponsors } from "@/lib/sponsors";
import SponsorMark from "@/components/SponsorMark";
import { cityLine, site } from "@/data/site";

const Sponsors = () => {
  const sponsors = getSponsors(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 bg-black border-b-2 border-primary">
          <div className="container text-center">
            <div className="text-primary mb-4 text-sm uppercase tracking-widest">
              &gt; SUPPORT.LOCAL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-glow">
              &gt; SPONSOR_LOREM_IPSUM
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto uppercase tracking-wider">
              &gt; DOLOR_SIT_AMET_CONSECTETUR
              <br />
              &gt; ADIPISCING_ELIT_SED_DO_EIUSMOD
            </p>
          </div>
        </section>

        <section className="py-16 border-b-2 border-primary">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary text-glow">&gt; OUR_SPONSORS</h2>

              {sponsors.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground uppercase tracking-wider">
                    &gt; NO_SPONSORS_YET
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sponsors.map((sponsor) => (
                    <Card key={sponsor.id} className="shadow-card hover:shadow-card-hover transition-smooth border-2 border-primary bg-card">
                      <CardHeader>
                        <div className="mb-4 p-6 border-2 border-primary bg-black flex items-center justify-center h-32">
                          <SponsorMark sponsor={sponsor} className="max-w-full max-h-full text-lg" />
                        </div>
                        <CardTitle className="text-primary text-glow text-center">
                          {sponsor.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" asChild className="w-full">
                          <a href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer">
                            [VISIT_WEBSITE]
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary text-glow">&gt; WHY_SPONSOR</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="shadow-card border-2 border-primary bg-card">
                  <CardHeader>
                    <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-primary text-glow">&gt; GET_SEEN</CardTitle>
                    <CardDescription className="uppercase tracking-wider text-xs">
                      &gt; LOREM_IPSUM_DOLOR
                      <br />
                      &gt; SIT_AMET_CONSECTETUR
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-card border-2 border-primary bg-card">
                  <CardHeader>
                    <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-primary text-glow">&gt; MEET_BUILDERS</CardTitle>
                    <CardDescription className="uppercase tracking-wider text-xs">
                      &gt; ADIPISCING_ELIT
                      <br />
                      &gt; SED_DO_EIUSMOD
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-card border-2 border-primary bg-card">
                  <CardHeader>
                    <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-primary text-glow">&gt; GIVE_BACK</CardTitle>
                    <CardDescription className="uppercase tracking-wider text-xs">
                      &gt; TEMPOR_INCIDIDUNT
                      <br />
                      &gt; UT_LABORE_ET_DOLORE
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="shadow-card border-2 border-primary bg-card">
                  <CardHeader>
                    <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-primary text-glow">&gt; HOST_EVENTS</CardTitle>
                    <CardDescription className="uppercase tracking-wider text-xs">
                      &gt; MAGNA_ALIQUA
                      <br />
                      &gt; UT_ENIM_AD_MINIM
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div className="border-2 border-primary p-12 text-center bg-card">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-glow">
                &gt; WANT_TO_SPONSOR?
              </h2>
              <p className="text-xl mb-8 uppercase tracking-wider max-w-2xl mx-auto text-muted-foreground">
                &gt; LOREM_IPSUM_DOLOR_SIT_AMET
                <br />
                &gt; CONSECTETUR_ADIPISCING_ELIT
                <br />
                &gt; {cityLine(" // ")} // MORE_CITIES_SOON
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href={`mailto:${site.email}`}>[GET_IN_TOUCH]</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
