import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmInfo from './component/FilmInfo';
import FilmDetails from './component/FilmDetails';
import Search from './component/Search';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <Navigation/>
  );
}
