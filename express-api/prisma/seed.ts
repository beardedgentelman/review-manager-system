import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.review.createMany({
    data: [
      {
        title: "Great Product!",
        content: "I loved this product. Highly recommended.",
        rating: 5,
        author: "John Doe",
      },
      {
        title: "Not bad",
        content: "It works as expected. Nothing extraordinary.",
        rating: 3,
        author: "Jane Smith",
      },
      {
        title: "Terrible experience",
        content: "It broke after a day. Very disappointed.",
        rating: 1,
        author: "Sam Lee",
      },
      {
        title: 'Great Product!',
        content: 'This product exceeded my expectations. Highly recommended!',
        rating: 5,
        author: 'John Doe 2',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Not worth the price',
        content: 'The quality was subpar compared to the cost.',
        rating: 2,
        author: 'Jane Smith 3',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Decent, but with flaws',
        content: 'Good product overall, but had a few issues.',
        rating: 3,
        author: 'Alice Brown',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Amazing Service!',
        content: 'Customer service was excellent and very helpful.',
        rating: 5,
        author: 'Bob Johnson',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Would buy again',
        content: 'Solid build quality and great design. Satisfied customer.',
        rating: 4,
        author: 'Charlie Wilson',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Excellent Performance',
        content: 'The device runs smoothly without any lags. Perfect for my daily tasks.',
        rating: 5,
        author: 'John Doe',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Disappointing Experience',
        content: 'The software crashed multiple times within the first week.',
        rating: 1,
        author: 'Jane Smith',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Good Value for Money',
        content: 'For the price, this product offers great features. Very satisfied!',
        rating: 4,
        author: 'Alice Brown',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Terrible Support',
        content: 'Customer support was unhelpful and took days to respond.',
        rating: 2,
        author: 'Bob Johnson',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Highly Recommend!',
        content: 'This is one of the best purchases I have made in a long time.',
        rating: 5,
        author: 'Charlie Wilson',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Average Product',
        content: 'Does the job, but nothing extraordinary. Might not repurchase.',
        rating: 3,
        author: 'Emily Davis',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Exceeded Expectations',
        content: 'The quality and performance blew me away. Definitely worth it.',
        rating: 5,
        author: 'Frank Harris',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Not Durable',
        content: 'Broke within a few months of use. Disappointed with the build quality.',
        rating: 2,
        author: 'Grace Kelly',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'User-Friendly Design',
        content: 'The interface is intuitive and easy to navigate. Great for beginners.',
        rating: 4,
        author: 'Henry Lewis',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Unreliable',
        content: 'Frequent issues and inconsistencies in performance.',
        rating: 2,
        author: 'Ivy Martin',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Best Purchase Ever',
        content: 'Can’t imagine my life without this product now. Truly exceptional.',
        rating: 5,
        author: 'Jack Thompson',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Needs Improvement',
        content: 'Has potential but currently lacks some crucial features.',
        rating: 3,
        author: 'Kelly Wright',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Budget-Friendly',
        content: 'A great option for those looking for affordability without sacrificing too much quality.',
        rating: 4,
        author: 'Laura Young',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Too Expensive',
        content: 'The product is decent, but the price is not justified.',
        rating: 3,
        author: 'Mike Green',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Impressive Battery Life',
        content: 'Lasts all day on a single charge, even with heavy use.',
        rating: 5,
        author: 'Nina Hall',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Limited Features',
        content: 'Missing some key functionalities that competitors offer.',
        rating: 3,
        author: 'Oliver King',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Fast Shipping',
        content: 'Arrived earlier than expected. Packaging was secure.',
        rating: 5,
        author: 'Patricia Scott',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Misleading Description',
        content: 'The product didn’t match the online description. False advertising!',
        rating: 1,
        author: 'Quincy Turner',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Stylish and Modern',
        content: 'Looks great and fits perfectly into my home decor.',
        rating: 4,
        author: 'Rachel Parker',
        createdAt: new Date().toISOString(),
      },
      {
        title: 'Unmatched Quality',
        content: 'Superior build and materials. Worth every penny!',
        rating: 5,
        author: 'Steve Adams',
        createdAt: new Date().toISOString(),
      },
    ],
  });
}

main()
    .then(async () => {
      console.log("Database seeded successfully!")
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
