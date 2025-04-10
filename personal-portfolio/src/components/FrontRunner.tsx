import React, {useState, useEffect} from 'react';
import './FrontRunner.css';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

const FrontRunner: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    if (window.innerWidth > 768) {
      // Only allow modal to open on non-mobile screens
      setModalImage(imageSrc);
    }
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: 0, // Trigger when the element is viewable
      }
    );
  
    const elementsToObserve = document.querySelectorAll('.fr-desc, .fr-desc-container img, .fr-desc-container i');
    elementsToObserve.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect(); // Clean up the observer
  }, []);
  

  return <div className="home">
  <Header />
  <div className='fr-main-content'>
    <div className='fr-content'>
      <div className='fr-header'>
          <div className='fr-info'>
            <h3>FrontRunner</h3>
            <i>2025</i>
            <hr/>
            <p>Creating a unified business platform for small artisan businesses.</p>
            <div className='links'>
              <a href="https://docs.google.com/presentation/d/150-5HWtmDt3korGb6NTngIDZUYOZQLBOJF1Lv1yvn4Y/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Case Study
                <span className="arrow">➔</span>
              </a>
              <a href="https://www.figma.com/design/Jepq2Cy1RlA7OZRa0p7Fdb/FrontRunner-UXD?node-id=59-60&t=qkR5ao7jDS2bBfli-1" target="_blank" rel="noopener noreferrer">
                View on Figma
                <span className="arrow">➔</span>
              </a>
            </div>
          </div>
          <img
            src="../assets/FrontRunner Graphic.png"
            alt="FrontRunner"
            onClick={() => openModal('../assets/FrontRunner Graphic.png')}
          />
      </div>
      <div className='fr-desc-container'>
        <div className= 'fr-wrap'>
        <div className='fr-desc small-fr-desc'>
          <h3>My Contribution</h3>
          <p>For this project, I conducted several user interviews, analyzed user research data, helped come up with design solutions, and individually built the mid and high fidelity prototypes.</p>
        </div>
        <div className='fr-desc small-fr-desc'>
          <h3>Problem Statement</h3>
          <p>Independent creatives need a way to manage an online presence, enabling them to build a community and sell their creations.</p>
        </div>
        <div className='fr-desc small-fr-desc'>
          <h3>User Research Plan</h3>
          <p>The end users of the application are local artists and small artisan businesses looking to expand their visibility across e-commerce websites. We recruited these individuals by attending local markets and contacting small artists we knew personally.</p>
          <p>We conducted semi-structured interviews with seven small artists, asking them about their experiences selling their work both in person and online through mediums such as markets and online storefronts.</p>
        </div>
        <div className='fr-desc small-fr-desc'>
          <h3>Pain Points</h3>
          <p>Through our research, we discovered pain points relating to:</p>
          <ul>
            <li>Marketing</li>
            <li>Online platform control</li>
            <li>Income stability</li>
            <li>Business tool usage</li>
            <li>Community</li>
            <li>Order fulfillment</li>
          </ul>
        </div>
        </div>
        <img
          src="../assets/fr-affinity.png"
          alt="FrontRunner Affinity Diagram"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-affinity.png')}
        />
        <i>Affinity Diagram</i>
        <div className='fr-desc'>
          <h3>Personas</h3>
          <p>Next, 3 personas were created representing 3 different end users for FrontRunner.</p>
        </div>
        <img
          src="../assets/fr-persona-1.png"
          alt="FrontRunner Persona 1"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-persona-1.png')}
        />
        <img
          src="../assets/fr-persona-2.png"
          alt="FrontRunner Persona 3"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-persona-3.png')}
        />
        <img
          src="../assets/fr-persona-3.png"
          alt="FrontRunner Persona 3"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-persona-3.png')}
        />
        <i>FrontRunner Personas</i>
        <div className='fr-desc'>
          <h3>Brainstorming</h3>
          <p>Following the creation of these personas, our team brainstormed numerous ideas for features that FrontRunner could include. We then picked the ones that we deemed most important.</p>
        </div>
        <img
          src="../assets/fr-brainstorming.png"
          alt="FrontRunner Brainstorming"
          className="full-graphic"
          onClick={() => openModal('../assets/fr-brainstorming.png')}
        />
        <i>Brainstorming in Miro</i>
        <div className='fr-desc'>
          <h3>Scenarios</h3>
          <p>3 scenarios were also created according to these 3 personas with brainstormed features in mind.</p>
          <p><b>Sarah M:</b> Sarah is a part-time linocut artist, and gets introduced to FrontRunner by a friend at a local market. Intrigued to check out a solution to manage her art sales across in-person markets and online platforms, she quickly sets up her inventory. After syncing her market and online listings, she is pleased to find that the platform simplifies product management, saving her time. With localized marketing suggestions and an integrated inventory management system, Sarah can now focus more on creating art and attending markets while spending less time managing her storefronts.</p>
          <p><b>Alex P:</b> Alex, a busy Biomedical Researcher, is passionate about art but doesn't want to spend time in marketing efforts, and is frustrated by the constant need to adjust prices in response to market fluctuations. When he learns about FrontRunner and its ability to simplify storefront management, he is eager to try it. His first experience is positive, as the intuitive interface allows him to quickly set up his profile and connect his multiple online storefronts. He can now manage orders and customer interactions seamlessly, and finds that he is spending less time on pricing adjustments by using a single platform. Leaving more room for time spent in his true creative passions.</p>
          <p><b>Jamie R:</b> Jamie, a full-time medical imaging student, supplements her income with art commissions. She is drawn to FrontRunner for its official sales platform, addressing her concerns about scams on the internet. After setting up her profile, Jamie is pleased to find a supportive artist community, which aligns with her values by helping to counter the flood of profit driven AI-generated content. She is surprised to find how much time she saves on a weekly basis with the platform's storefront management tools and has peace of mind knowing that her listings are backed by a trustworthy system for real buyers.</p>
        </div>
        <div className='fr-desc'>
          <h3>Storyboards</h3>
          <p>Storyboards were also drawn up to display our users’ journeys.</p>
        </div>
        <img
          src="../assets/fr-storyboard-1.png"
          alt="FrontRunner storyboard 1"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-storyboard-1.png')}
        />
        <img
          src="../assets/fr-storyboard-2.png"
          alt="FrontRunner storyboard 2"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-storyboard-2.png')}
        />
        <img
          src="../assets/fr-storyboard-3.png"
          alt="FrontRunner storyboard 3"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-storyboard-3.png')}
        />
        <i>FrontRunner Storyboards</i>
        <div className='fr-desc'>
          <h3>Wireframes</h3>
          <p>We then created low-fidelity wireframes to explore our design ideas in a quick manner to then get feedback from our target users. We explored two different design ideas and performed a usability study with 4 potential end users.</p>
        </div>
        <img
          src="../assets/fr-wireframe-1.png"
          alt="FrontRunner wireframe 1"
          className="small-graphic"
          onClick={() => openModal('../assets/fr-wireframe-1.png')}
        />
        <i>Wireframe 1</i>
        <img
          src="../assets/fr-wireframe-2.png"
          alt="FrontRunner wireframe 2"
          className="small-graphic"
          onClick={() => openModal('../assets/fr-wireframe-2.png')}
        />
        <i>Wireframe 2</i>
        <div className='fr-desc'>
            <p>The results of the usability study helped us decide how we should merge these two designs, taking the best from each and moving on to a higher fidelity, interactive version.</p>
        </div>

        <div className='fr-desc'>
          <h3>Mid-Fidelity Prototype</h3>
          <p>Important features that were pulled from the wireframes included a unified dashboard to view products and orders, product grid, order table, and aggregated social media feed.</p>
        </div>

        <img
          src="../assets/fr-MFHome.png"
          alt="FrontRunner Mid Fidelity Home"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-MFHome.png')}
        />
        <i>Mid-Fidelity Home</i>
        <img
          src="../assets/fr-MFProducts.png"
          alt="FrontRunner Mid Fidelity Products"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-MFProducts.png')}
        />
        <i>Mid-Fidelity Products Page</i>
        <img
          src="../assets/fr-MFNewProduct.png"
          alt="FrontRunner Mid Fidelity NewProduct"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-MFNewProduct.png')}
        />
        <i>Mid-Fidelity New Product Form</i>
        <img
          src="../assets/fr-MFOrders.png"
          alt="FrontRunner Mid Fidelity Orders"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-MFOrders.png')}
        />
        <i>Mid-Fidelity Orders Page</i>
        <img
          src="../assets/fr-MFCommunity.png"
          alt="FrontRunner Mid Fidelity Community"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-MFCommunity.png')}
        />
        <i>Mid-Fidelity Community Page</i>
        <img
          src="../assets/fr-MFCommunityIG.png"
          alt="FrontRunner Mid Fidelity Community Aggregated"
          className="medium-graphic"
          onClick={() => openModal('../assets/fr-MFCommunityIG.png')}
        />
        <i>Mid-Fidelity Community Aggregated</i>

        <div className= 'fr-wrap'>
        <div className='fr-desc small-fr-desc'>
          <h3>Usability Study</h3>
          <p>Another usability study was performed following the completion of the mid-fidelity prototype to assess the interactions of the system. This time, users were given tasks to complete and communicated their thoughts to our team. The main findings included the need for a labeled navigation bar, a smaller preview of the community feed on the home page, and product information previews on the product cards.</p>
        </div>
        <div className='fr-desc small-fr-desc'>
          <h3>High Fidelity Prototype</h3>
          <p>Finally, a high fidelity prototype was created using the mid-fidelity as a baseline while incorporating the findings from the usability study. This prototype includes a sleek, modern design with a plethora of colors to match the creative nature of our users.</p>
            <p>To view the full prototype, please visit the <a href="https://www.figma.com/design/Jepq2Cy1RlA7OZRa0p7Fdb/FrontRunner-UXD?node-id=59-60&t=qkR5ao7jDS2bBfli-1" target="_blank" rel="noopener noreferrer" style={{color:"#FF4949"}}>Figma project</a>.</p>
        </div>
        </div>

        <img
          src="../assets/FrontRunner Home.png"
          alt="FrontRunner Home"
          className="medium-graphic"
          onClick={() => openModal('../assets/FrontRunner Home.png')}
        />
        <i>FrontRunner Home</i>
        <img
          src="../assets/My Products.png"
          alt="FrontRunner My Products"
          className="medium-graphic"
          onClick={() => openModal('../assets/My Products.png')}
        />
        <i>FrontRunner Products Page</i>
        <img
          src="../assets/My Orders.png"
          alt="FrontRunner My Orders"
          className="medium-graphic"
          onClick={() => openModal('../assets/My Orders.png')}
        />
        <i>FrontRunner Orders Page</i>
        <img
          src="../assets/Community.png"
          alt="FrontRunner Community"
          className="medium-graphic"
          onClick={() => openModal('../assets/Community.png')}
        />
        <i>FrontRunner Community Page</i>

        <div className='fr-desc'>
          <h3>Impact/Takeaways</h3>
          <p>FrontRunner as a platform provides a centralized way for small artisan businesses to manage their products and orders as well as interact with their community.</p>
            <p style={{marginBottom:-5}}>"I like that I can manage my business while staying engaged with my social media platforms."</p>
            <p>- End user</p>
            <p>Personally, I loved working on this project and being able to provide a well-thought-out design that I know has the potential to help people I know personally. At the same time, I was able to reinforce my ability to tackle real world problems using user-centered design best practices.</p>
            <p>Thanks for reading!</p>
        </div>
      </div>
    </div>

    
    {modalImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="Enlarged" />
              <div className="close-btn" onClick={closeModal}>
                Close
              </div>
            </div>
          </div>
        )}
  </div>
  <Footer/>
  </div>;
};

export default FrontRunner;
