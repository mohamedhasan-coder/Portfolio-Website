import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  category: string;
  gifUrl: string;
}

const skills: Skill[] = [
  {
    name: 'Java',
    category: 'Core Programming',
    gifUrl: 'https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif'
  },
  {
    name: 'React.js',
    category: 'Frontend Framework',
    gifUrl: 'https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif'
  },
  {
    name: 'Python',
    category: 'Data Science & AI',
    gifUrl: 'https://media.giphy.com/media/LMt9638dO8dftAjtco/giphy.gif'
  },
  {
    name: 'JavaScript',
    category: 'Dynamic Programming',
    gifUrl: 'https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif'
  },
  {
    name: 'HTML/CSS',
    category: 'Web Fundamentals',
    gifUrl: 'https://media.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif'
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control',
    gifUrl: 'https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif'
  },
  {
    name: 'Spring Boot',
    category: 'Backend Framework',
    gifUrl: 'https://media.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif'
  },
  {
    name: 'AI & ML',
    category: 'Machine Learning',
    gifUrl: 'https://media.giphy.com/media/vISmwpBJUNYzukTnVx/giphy.gif'
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="skill-card card-hover animate-on-scroll" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              <CardContent className="p-6 text-center">
                <img 
                  src={skill.gifUrl} 
                  alt={`${skill.name} animation`} 
                  className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                  loading="lazy"
                />
                <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
