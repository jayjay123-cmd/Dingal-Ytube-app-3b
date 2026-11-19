import { Bell, Cast, Flame, Home, MoreVertical, PlusCircle, Search, Tv, User } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../constants/index.styles';


const CATEGORIES = ['All', 'Gaming', 'React Native', 'Music', 'Live', 'Podcasts', 'Mixes', 'Tech'];

const VIDEOS = [
  {
    id: '1',
    title: 'Building a Full React Native UI Clone from Scratch',
    thumbnail: 'https://4kwallpapers.com/images/walls/thumbs_3t/27628.jpg',
    duration: '3:25',
    channelName: 'Tech Code',
    channelAvatar: 'https://picsum.photos/id/64/100/100',
    views: '125K views',
    uploadedAt: '2 days ago',
  },
  {
    id: '2',
    title: 'Top 10 Mobile UI Design Trends for Developers',
    thumbnail: 'https://4kwallpapers.com/images/walls/thumbs_3t/15719.jpg',
    duration: '3:25',
    channelName: 'Rene Baterbonia',
    channelAvatar: 'https://picsum.photos/id/1025/100/100',
    views: '45K views',
    uploadedAt: '5 hours ago',
  },
  { id: '3',
    title: ' The Walking Dead: Daryl Dixon 2023 Series | Official Trailer',
    thumbnail: 'https://4kwallpapers.com/images/walls/thumbs_3t/12890.jpg',
    duration: '08:40',
    channelName: 'AMPOL',
    channelAvatar: 'https://picsum.photos/id/1025/100/100',
    views: '100K views',
    uploadedAt: '4 Years ago',
  },
  {id: '4',
    title: ' Emboy baterbonia | Official Trailer',
    thumbnail: require('../../assets/images/rene.jpg'),   // <-- changed
    duration: '5:40',
    channelName: 'Mamaaa!',
    channelAvatar: 'https://picsum.photos/id/1025/100/100',
    views: '100K views',
    uploadedAt: '4 Years ago',
  },
];

export default function YouTubeScreen() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Tv color="#ff9900" size={28} />
          <Text style={styles.logoText}>YouTube</Text>
        </View>

        <View style={styles.headerIcons}>
          <TouchableOpacity><Cast color="#ff9900" size={22} /></TouchableOpacity>
          <TouchableOpacity><Bell color="#ff9900" size={22} /></TouchableOpacity>
          <TouchableOpacity><Search color="#ff9900" size={22} /></TouchableOpacity>
        </View>
      </View>

      {/* Categories Bar */}
      <View style={{ height: 50 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
          {CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                activeCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === category && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Video Feed */}
      <ScrollView style={{ flex: 1 }}>
        {VIDEOS.map((video) => (
          <View key={video.id} style={styles.videoCard}>
            <View>
              {/* changed: supports both web URLs and the local require() image */}
              <Image
                source={
                  typeof video.thumbnail === 'string'
                    ? { uri: video.thumbnail }
                    : video.thumbnail
                }
                style={styles.thumbnail}
              />
              <View style={styles.durationBadge}>
                <Text style={styles.durationText}>{video.duration}</Text>
              </View>
            </View>

            <View style={styles.videoDetails}>
              <Image source={{ uri: video.channelAvatar }} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.title} numberOfLines={2}>
                  {video.title}
                </Text>
                <Text style={styles.meta}>
                  {video.channelName} • {video.views} • {video.uploadedAt}
                </Text>
              </View>
              <TouchableOpacity>
                <MoreVertical color="#888888" size={18} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home color="#ff9900" size={22} />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Flame color="#888888" size={22} />
          <Text style={styles.navText}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <PlusCircle color="#888888" size={26} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Tv color="#888888" size={22} />
          <Text style={styles.navText}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User color="#888888" size={22} />
          <Text style={styles.navText}>You</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}