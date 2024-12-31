import React, { useState, useEffect } from "react";
import Image from "next/image";
import techImage from "../../../public/assets/tech.png"; // Example path, replace with your actual path
import wellnessImage from "../../../public/assets/wallnes.png"; // Example path, replace with your actual path
import travelImage from "../../../public/assets/travell.jpg"; // Example path, replace with your actual path
import foodImage from "../../../public/assets/food.png"; // Example path, replace with your actual path
import creativityImage from "../../../public/assets/creativity.jpg"; // Example path, replace with your actual path
import financeImage from "../../../public/assets/finance.png"; // Example path, replace with your actual path



interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

const fetchComments = async (): Promise<Comment[]> => {
  const response = await fetch("https://dummyjson.com/comments");
  const data = await response.json();
  return data.comments;
};

export const Blog1 = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);

  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName("input");
    const textAreaElements = document.getElementsByTagName("textarea");
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();

      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ""; // Clear input
        textAreaElements[0].value = ""; // Clear textarea
      } else {
        alert("Please enter both a name and a comment.");
      }
    }
  };

  return (
    <div className="blog-container p-6 bg-white shadow rounded-md max-w-2xl mx-auto">
      <Image
        src={techImage}
        alt="Tech Innovations"
        width={900}
        height={400}
        className="rounded-lg mb-6 mx-auto"
      />
      <h1 className="text-3xl font-bold mb-4">Tech Innovations</h1>
      <p className="text-gray-700 mb-4">
        The world of technology is constantly evolving, bringing innovations
        that reshape the way we live and work. Staying informed about the latest
        advancements can open up opportunities for personal and professional
        growth. From groundbreaking AI-powered tools to health tech gadgets, the
        future is all about making our lives more efficient and interconnected.
        Technology is not just about convenience; it&apos;s about empowering
        individuals to achieve more and businesses to operate smarter. Embracing
        these trends can position you to be a part of the ongoing technological
        revolution.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">AI-Powered Tools:</b>
          From virtual assistants to creative apps, AI is simplifying daily
          tasks and enhancing productivity in remarkable ways.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Smart Home Devices:</b>
          Gadgets like smart thermostats and voice-activated assistants are
          transforming how we interact with our homes. These devices not only
          offer convenience but also contribute to energy efficiency and
          sustainability.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Health Tech:</b>
          Wearable devices like fitness trackers and smartwatches are
          revolutionizing how we monitor and manage our well-being. They provide
          real-time data and insights that help individuals take proactive steps
          towards better health.
        </li>
        <li className="text-gray-600">
          <b className="text-gray-800">Pro Tip:</b>
          Spend a few minutes each day exploring tech news or experimenting with
          new apps to seamlessly integrate technology into your lifestyle.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        By embracing these trends, individuals and organizations can stay ahead
        of the curve. From enhancing productivity to improving quality of life,
        technology holds the key to a brighter and more connected future.
      </p>
      <p className="text-gray-700 mb-8">
        <b>Conclusion:</b> Stay curious and adaptable as technology continues to
        evolve. Being proactive in learning and integrating new tools can set
        you apart in this ever-changing digital era.
      </p>
      <div className="comments-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.slice(0, 4).map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md my-4"
            >
              <p className="text-gray-800">
                <b>{comment.user.username}</b>: {comment.body.replace(/'/g, "&apos;")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};



interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export const Blog2 = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);

  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName("input");
    const textAreaElements = document.getElementsByTagName("textarea");
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();

      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ""; // Clear input
        textAreaElements[0].value = ""; // Clear textarea
        const userDataElement = document.getElementById("userdata");
        if (userDataElement) {
          userDataElement.innerHTML = "<b>" + username + "</b>: " + userComment.replace(/'/g, "&apos;");
        }
      } else {
        alert("Please enter both a name and a comment.");
      }
    }
  };

  return (
    <div className="blog-container p-6 bg-white shadow rounded-md max-w-2xl mx-auto">
      <Image
        src={wellnessImage}
        alt="Wellness Tips"
        width={900}
        height={400}
        className="rounded-lg mb-6 mx-auto"
      />
      <h1 className="text-3xl font-bold mb-4">
        Wellness Tips for a Balanced Life
      </h1>
      <p className="text-gray-700 mb-4">
        Maintaining a balanced lifestyle is crucial for overall well-being.
        Incorporating wellness practices into your daily routine can
        significantly improve your physical, mental, and emotional health. Here
        are some tips to help you achieve and maintain balance in your life.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Mindful Meditation:</b>
          Practice mindfulness and meditation to reduce stress and enhance
          mental clarity. Even a few minutes each day can make a big difference.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Balanced Diet:</b>
          Focus on a nutritious diet that includes a variety of fruits,
          vegetables, lean proteins, and whole grains. Proper nutrition fuels
          your body and mind.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Regular Exercise:</b>
          Engage in regular physical activity that you enjoy, whether it&apos;s
          walking, yoga, or sports. Exercise boosts your mood and energy levels.
        </li>
        <li className="text-gray-600">
          <b className="text-gray-800">Pro Tip:</b>
          Prioritize self-care and make time for activities that bring you joy
          and relaxation.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        By integrating these wellness practices into your daily life, you can
        achieve a healthier and more balanced lifestyle. Remember, it&apos;s about
        making small, sustainable changes that contribute to your overall
        well-being.
      </p>
      <p className="text-gray-700 mb-8">
        <b>Conclusion:</b> Focus on holistic wellness by taking care of your
        body, mind, and spirit. Embrace these tips to enhance your quality of
        life and achieve a sense of balance.
      </p>
      <div className="comments-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.slice(0, 4).map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md my-4"
            >
              <p className="text-gray-800">
                <b>{comment.user.username}</b>: {comment.body.replace(/'/g, "&apos;")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};



interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export const Blog3 = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);

  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName("input");
    const textAreaElements = document.getElementsByTagName("textarea");
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();

      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ""; // Clear input
        textAreaElements[0].value = ""; // Clear textarea
      } else {
        alert("Please enter both a name and a comment.");
      }
    }
  };

  return (
    <div className="blog-container p-6 bg-white shadow rounded-md max-w-2xl mx-auto">
      <Image
        src={travelImage}
        alt="Travel Guides"
        width={900}
        height={400}
        className="rounded-lg mb-6 mx-auto"
      />
      <h1 className="text-3xl font-bold mb-4">
        Travel Guides for Adventurous Souls
      </h1>
      <p className="text-gray-700 mb-4">
        Exploring new destinations can be a thrilling and enriching experience.
        Whether you&apos;re seeking adventure, relaxation, or cultural immersion,
        travel guides can help you make the most of your journey. From popular
        tourist spots to hidden gems, these guides offer valuable insights and
        tips for every traveler. Embrace the joy of discovery and create
        unforgettable memories with well-planned trips.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Popular Destinations:</b>
          Visit iconic landmarks and attractions that are must-sees in any
          travel itinerary. These destinations offer rich history, stunning
          architecture, and unique cultural experiences.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Off the Beaten Path:</b>
          Explore lesser-known locations that offer a more authentic and
          intimate travel experience. These hidden gems often provide a deeper
          connection to the local culture and environment.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Travel Tips:</b>
          Learn practical advice on packing, navigating, and making the most of
          your travel budget. Effective planning can enhance your travel
          experience and reduce stress.
        </li>
        <li className="text-gray-600">
          <b className="text-gray-800">Pro Tip:</b>
          Engage with locals and immerse yourself in the local culture for a
          richer and more fulfilling travel experience.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        Traveling opens up new perspectives and allows you to experience the
        world in diverse and exciting ways. Embrace the adventure and make the
        most of every journey by staying curious and open-minded.
      </p>
      <p className="text-gray-700 mb-8">
        <b>Conclusion:</b> Whether you&apos;re a seasoned traveler or a newbie
        explorer, travel guides can provide valuable insights and inspiration
        for your next adventure. Embrace the journey and discover the world with
        an open heart and mind.
      </p>
      <div className="comments-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.slice(0, 4).map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md my-4"
            >
              <p className="text-gray-800">
                <b>{comment.user.username}</b>: {comment.body.replace(/'/g, "&apos;")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};



interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export const Blog4 = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);

  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName("input");
    const textAreaElements = document.getElementsByTagName("textarea");
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();

      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ""; // Clear input
        textAreaElements[0].value = ""; // Clear textarea
      } else {
        alert("Please enter both a name and a comment.");
      }
    }
  };

  return (
    <div className="blog-container p-6 bg-white shadow rounded-md max-w-2xl mx-auto">
      <Image
        src={foodImage}
        alt="Gourmet Recipes"
        width={900}
        height={400}
        className="rounded-lg mb-6 mx-auto"
      />
      <h1 className="text-3xl font-bold mb-4">Delicious Gourmet Recipes</h1>
      <p className="text-gray-700 mb-4">
        Cooking is an art, and gourmet recipes are the masterpieces that elevate
        your culinary skills. Whether you&apos;re a seasoned chef or a home cook,
        experimenting with new recipes can be a delightful adventure. From
        savory entrees to delectable desserts, gourmet dishes offer a rich and
        satisfying experience for your taste buds. Explore the world of gourmet
        cooking and discover recipes that are both easy to make and impressively
        delicious.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Savory Entrees:</b>
          Delight in main dishes that combine fresh ingredients and bold flavors
          for a truly memorable meal. Examples include herb-crusted salmon,
          creamy risotto, and gourmet pasta dishes.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Delectable Desserts:</b>
          Satisfy your sweet tooth with indulgent treats like molten lava cakes,
          tiramisu, and artisanal ice creams. Gourmet desserts are perfect for
          special occasions or when you want to impress your guests.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Healthy Options:</b>
          Enjoy nutritious gourmet meals that are both delicious and good for
          you. Think quinoa salads, grilled vegetables, and lean protein dishes
          that are bursting with flavor.
        </li>
        <li className="text-gray-600">
          <b className="text-gray-800">Pro Tip:</b>
          Don’t be afraid to experiment with new ingredients and techniques.
          Cooking is a creative process, and trying new things can lead to
          delightful discoveries.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        Creating gourmet meals at home can be a rewarding and enjoyable
        experience. It allows you to explore new flavors, learn new cooking
        techniques, and enjoy restaurant-quality dishes in the comfort of your
        own kitchen.
      </p>
      <p className="text-gray-700 mb-8">
        <b>Conclusion:</b> Embrace the art of gourmet cooking and delight in the
        process of creating delicious and impressive dishes. Whether you&apos;re
        cooking for yourself, your family, or your friends, gourmet recipes can
        elevate your culinary experience and bring joy to your dining table.
      </p>
      <div className="comments-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.slice(0, 4).map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md my-4"
            >
              <p className="text-gray-800">
                <b>{comment.user.username}</b>: {comment.body.replace(/'/g, "&apos;")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};




interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export const Blog5 = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);

  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName("input");
    const textAreaElements = document.getElementsByTagName("textarea");
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();

      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ""; // Clear input
        textAreaElements[0].value = ""; // Clear textarea
      } else {
        alert("Please enter both a name and a comment.");
      }
    }
  };

  return (
    <div className="blog-container p-6 bg-white shadow rounded-md max-w-2xl mx-auto">
      <Image
        src={creativityImage}
        alt="Creative Ideas"
        width={900}
        height={400}
        className="rounded-lg mb-6 mx-auto"
      />
      <h1 className="text-3xl font-bold mb-4">
        Creative Ideas for Your Next Project
      </h1>
      <p className="text-gray-700 mb-4">
        Unleashing your creativity can lead to innovative projects and inspiring
        results. Whether you&apos;re into arts, crafts, writing, or any other
        creative endeavor, having a bank of creative ideas can be incredibly
        motivating. Here are some tips to spark your imagination and kickstart
        your next project.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Brainstorm Freely:</b>
          Allow yourself to jot down all ideas, no matter how wild they seem.
          The key is to get your thoughts flowing without self-editing.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Seek Inspiration:</b>
          Look for inspiration in everyday life, nature, books, and art.
          Sometimes a walk in the park or a visit to a museum can ignite a spark
          of creativity.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Experiment Boldly:</b>
          Don’t be afraid to try new techniques and mediums. Experimentation can
          lead to unexpected and delightful results.
        </li>
        <li className="text-gray-600">
          <b className="text-gray-800">Pro Tip:</b>
          Set aside dedicated time for creative activities without distractions
          to let your ideas fully develop.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        By embracing creativity and allowing yourself to think outside the box,
        you can develop projects that are uniquely yours. Creativity is a
        journey that requires patience, curiosity, and a willingness to explore
        new territories.
      </p>
      <p className="text-gray-700 mb-8">
        <b>Conclusion:</b> Embrace your creative potential and let your ideas
        flow. Whether it&apos;s a small craft project or a large-scale artistic
        endeavor, every creative effort is valuable and adds to your personal
        growth.
      </p>
      <div className="comments-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.slice(0, 4).map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md my-4"
            >
              <p className="text-gray-800">
                <b>{comment.user.username}</b>: {comment.body.replace(/'/g, "&apos;")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};



interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export const Blog6 = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);

  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName("input");
    const textAreaElements = document.getElementsByTagName("textarea");
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();

      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ""; // Clear input
        textAreaElements[0].value = ""; // Clear textarea
      } else {
        alert("Please enter both a name and a comment.");
      }
    }
  };

  return (
    <div className="blog-container p-6 bg-white shadow rounded-md max-w-2xl mx-auto">
      <Image
        src={financeImage}
        alt="Financial Tips"
        width={900}
        height={400}
        className="rounded-lg mb-6 mx-auto"
      />
      <h1 className="text-3xl font-bold mb-4">
        Financial Tips for Smart Money Management
      </h1>
      <p className="text-gray-700 mb-4">
        Managing your finances wisely is essential for building a secure and
        prosperous future. Whether you&apos;re just starting out or looking to
        improve your financial health, these tips can help you make informed
        decisions and achieve your financial goals.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Create a Budget:</b>
          Track your income and expenses to gain a clear understanding of your
          financial situation. A budget helps you manage your money effectively
          and ensures you stay on top of your financial goals.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Save Regularly:</b>
          Make saving a priority by setting aside a portion of your income each
          month. Whether it&apos;s for an emergency fund, retirement, or future
          investments, regular savings can build a strong financial foundation.
        </li>
        <li className="text-gray-600 mb-2">
          <b className="text-lg text-gray-800">Invest Wisely:</b>
          Explore different investment options to grow your wealth over time.
          Diversify your investments to reduce risk and maximize returns.
        </li>
        <li className="text-gray-600">
          <b className="text-gray-800">Pro Tip:</b>
          Continuously educate yourself about personal finance and stay informed
          about market trends to make sound financial decisions.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        Financial literacy is key to making informed decisions that align with
        your long-term goals. By understanding basic financial principles and
        staying disciplined, you can achieve greater financial stability and
        security.
      </p>
      <p className="text-gray-700 mb-8">
        <b>Conclusion:</b> Take control of your finances by budgeting, saving,
        and investing wisely. With a proactive approach and a commitment to
        learning, you can build a financially secure future.
      </p>
      <div className="comments-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.slice(0, 4).map((comment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md my-4"
            >
              <p className="text-gray-800">
                <b>{comment.user.username}</b>: {comment.body.replace(/'/g, "&apos;")}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};
