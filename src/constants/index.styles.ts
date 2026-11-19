import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000', // Deep black background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff9900', // Yellow YouTube text
    marginLeft: 8,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  categoryScroll: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#000000',
  },
  categoryChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#1b1b1b',
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: '#ff9900', // Gold/orange accent for active chip
  },
  categoryText: {
    color: '#cccccc',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#000000',
    fontWeight: 'bold',
  },
  videoCard: {
    marginBottom: 20,
    backgroundColor: '#0a0a0a',
  },
  thumbnail: {
    width: '100%',
    height: 400, // Increased height for larger video previews
    backgroundColor: '#222222',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: '#ff9900',
    fontSize: 12,
    fontWeight: '600',
  },
  videoDetails: {
    flexDirection: 'row',
    padding: 12,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ff9900', // Gold border on channel avatar
  },
  title: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
  },
  meta: {
    color: '#888888',
    fontSize: 13,
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#888888',
    fontSize: 10,
    marginTop: 4,
  },
  navTextActive: {
    color: '#ff9900',
    fontSize: 10,
    marginTop: 4,
    fontWeight: 'bold',
  },
});